
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  if (page === "dashboard") {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (page === "login") {
    return (
      <div>
        <Login onLogin={handleLogin} />
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button onClick={() => setPage("register")} className="text-blue-600 font-bold">
            Register
          </button>
        </p>
        <button onClick={() => setPage("home")} className="block mx-auto mt-3">
          Back to Home
        </button>
      </div>
    );
  }

  if (page === "register") {
    return (
      <div>
        <Register />
        <p className="text-center mt-4">
          Already have an account?{" "}
          <button onClick={() => setPage("login")} className="text-blue-600 font-bold">
            Login
          </button>
        </p>
        <button onClick={() => setPage("home")} className="block mx-auto mt-3">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          AI Learning Portal
        </h1>
        <p className="text-gray-600 mt-3">
          Welcome to your personalized learning journey!
        </p>
        <button
          onClick={() => setPage("login")}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Get Started
        </button>
        <button
          onClick={() => setPage("register")}
          className="mt-4 block mx-auto text-blue-600 font-bold"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default App;
