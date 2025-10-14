import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 px-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2">
            <span className="text-blue-500">Rail</span>
            <span className="text-white">Aid</span>
          </h1>
          <p className="text-gray-400 text-sm italic">Admin Control Panel</p>
          <h2 className="text-xl text-white font-semibold mt-4">
            Admin Login
          </h2>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 bg-red-900/30 p-2 rounded text-center mb-4 text-sm border border-red-700">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Back to user option */}
        <p className="text-center text-gray-400 text-sm mt-5">
          Not an admin?{" "}
          <span
            onClick={() => navigate("/user-login")}
            className="text-blue-500 hover:underline cursor-pointer font-semibold"
          >
            Go to User Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
