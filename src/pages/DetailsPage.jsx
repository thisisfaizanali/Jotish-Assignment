import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        No employee data found.
      </div>
    );
  }

  const { name, position, city, employeeId, joiningDate, salary } = state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white animate-fadeIn">
      <div className="max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-slate-700">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Employee Details
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <p>
            <span className="text-gray-400">Name:</span> {name}
          </p>
          <p>
            <span className="text-gray-400">Position:</span> {position}
          </p>
          <p>
            <span className="text-gray-400">City:</span> {city}
          </p>
          <p>
            <span className="text-gray-400">Employee ID:</span> {employeeId}
          </p>
          <p>
            <span className="text-gray-400">Joining Date:</span> {joiningDate}
          </p>
          <p>
            <span className="text-gray-400">Salary:</span> {salary}
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
          >
            Back
          </button>

          <button
            onClick={() => navigate('/photo-result', { state })}
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
          >
            Capture Photo
          </button>
        </div>
      </div>
    </div>
  );
}
