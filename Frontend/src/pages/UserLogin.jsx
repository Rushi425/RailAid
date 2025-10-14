import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("User login successful!");
      navigate("/user-dashboard");
    } catch (err) {
      setError(err.message);
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
          <p className="text-gray-400 text-sm italic">Your Station Partner</p>
          <h2 className="text-xl text-white font-semibold mt-4">
            User Login
          </h2>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 bg-red-900/30 p-2 rounded text-center mb-4 text-sm border border-red-700">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/user-register")}
            className="text-blue-500 hover:underline cursor-pointer font-semibold"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
