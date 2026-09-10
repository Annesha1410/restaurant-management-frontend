
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://https-github-com-yourusername-restaurant.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      Cookies.set("token", response.data.token);
      Cookies.set("role", response.data.data.role);

      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)",
      }}
    >
      <div className="bg-white/95 p-8 rounded-2xl shadow-xl w-96 border border-blue-200">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {/* Success Message */}
        {message && (
          <p className="text-green-600 text-center mb-4">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>

          {/* Email */}
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-blue-200 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          {/* Password */}
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-blue-200 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;

