import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { fetchEmployees } from '../services/api';

const cityCoordinates = {
  Edinburgh: [55.9533, -3.1883],
  Tokyo: [35.6762, 139.6503],
  'San Francisco': [37.7749, -122.4194],
  London: [51.5072, -0.1276],
  'New York': [40.7128, -74.006],
  Singapore: [1.3521, 103.8198],
  Sidney: [-33.8688, 151.2093],
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapPage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchEmployees();
      const rawData = response?.TABLE_DATA?.data || [];

      const uniqueCities = [...new Set(rawData.map((emp) => emp[2]))];

      setCities(uniqueCities);
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        Employee Locations Map
      </h1>

      <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-700">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {cities.map((city) => {
            const coords = cityCoordinates[city];
            if (!coords) return null;

            return (
              <Marker key={city} position={coords}>
                <Popup>{city}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
