
import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("Creating account...");

    try {
      const data = await registerUser({ name, email, password });
      setMessage(data.message || "Registration successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-blue-600 text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Join your AI Learning Portal
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-3 rounded-lg mt-6"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-3 rounded-lg mt-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border p-3 rounded-lg mt-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {message}
        </p>
      </form>
    </div>
  );
}

export default Register;
