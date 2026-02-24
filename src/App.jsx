import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BarChartPage from './pages/BarChartPage';
import DetailsPage from './pages/DetailsPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import PhotoResultPage from './pages/PhotoResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/photo-result" element={<PhotoResultPage />} />
        <Route path="/bar-chart" element={<BarChartPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
