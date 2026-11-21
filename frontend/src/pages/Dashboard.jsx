
function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <header className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Learning Portal
        </h1>

        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <main className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.name || "Student"}!
        </h2>

        <p className="text-gray-500 mt-2">
          Continue your personalized learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">My Courses</h3>
            <p className="text-gray-500 mt-2">Explore your courses.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Learning Progress</h3>
            <p className="text-gray-500 mt-2">Track your progress.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">AI Tutor</h3>
            <p className="text-gray-500 mt-2">Get help with learning.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
