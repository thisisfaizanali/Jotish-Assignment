import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../services/api';

export default function ListPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchEmployees();

        const rawData = response?.TABLE_DATA?.data || [];

        const formatted = rawData.map((emp, index) => ({
          id: index,
          name: emp[0],
          position: emp[1],
          city: emp[2],
          employeeId: emp[3],
          joiningDate: emp[4],
          salary: emp[5],
        }));

        setEmployees(formatted);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        Loading employees...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-red-400">
        {error}
      </div>
    );
  }
  const totalEmployees = employees.length;

  const uniqueCities = [...new Set(employees.map((emp) => emp.city))].length;

  const highestSalary = Math.max(
    ...employees.map((emp) => parseInt(emp.salary.replace(/[$,]/g, '')))
  ).toLocaleString();
  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Employee Dashboard
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/bar-chart')}
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
          >
            View Salary Graph
          </button>

          <button
            onClick={() => navigate('/map')}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition"
          >
            View Map
          </button>

          <button
            onClick={() => navigate('/')}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
          <p className="text-gray-400 text-sm">Total Employees</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            {totalEmployees}
          </h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
          <p className="text-gray-400 text-sm">Unique Cities</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {uniqueCities}
          </h2>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
          <p className="text-gray-400 text-sm">Highest Salary</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            ${highestSalary}
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 rounded-lg bg-slate-800 border border-slate-700 text-white w-full md:w-1/3"
      />

      {/* Employee Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees
          .filter((emp) =>
            emp.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((emp) => (
            <div
              key={emp.id}
              onClick={() => navigate(`/details/${emp.id}`, { state: emp })}
              className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-700"
            >
              <h2 className="text-xl font-semibold text-cyan-400">
                {emp.name}
              </h2>

              <p className="text-gray-400 mt-2">{emp.position}</p>

              <p className="text-gray-500 text-sm mt-1">{emp.city}</p>

              <p className="text-green-400 font-semibold mt-2">{emp.salary}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
