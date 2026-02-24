import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { fetchEmployees } from '../services/api';

export default function BarChartPage() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchEmployees();
      const rawData = response?.TABLE_DATA?.data || [];

      const formatted = rawData.slice(0, 10).map((emp) => ({
        name: emp[0],
        salary: parseInt(emp[5].replace(/[$,]/g, '')), // clean salary string
      }));

      setChartData(formatted);
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        Salary Bar Graph (Top 10 Employees)
      </h1>

      <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-700">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="salary" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
