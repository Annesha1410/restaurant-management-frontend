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
        },
      );

      console.log(response.data);

      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-rose-600">Login</h1>

        {message && (
          <p className="text-green-600 text-center mt-4">{message}</p>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <form onSubmit={handleLogin} className="mt-8">
          <label className="block text-gray-700 mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5"
            required
          />

          <label className="block text-gray-700 mb-2">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
