import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "https://https-github-com-yourusername-restaurant.onrender.com/api/auth/register",
                {
                    name,
                    email,
                    password
                }
            );

            setMessage(response.data.message);

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration failed"
            );

        }
    };

    return (
        <div className="min-h-screen bg-orange-100 flex justify-center items-center">

            <div className="bg-white p-8 rounded-xl shadow-md w-96">

                <h1 className="text-3xl font-bold text-center text-rose-600">
                    Register
                </h1>

                {message && (
                    <p className="text-green-600 text-center mt-4">
                        {message}
                    </p>
                )}

                {error && (
                    <p className="text-red-500 text-center mt-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleRegister} className="mt-8">

                    <label className="block text-gray-700 mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5"
                        required
                    />

                    <label className="block text-gray-700 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5"
                        required
                    />

                    <label className="block text-gray-700 mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5"
                        required
                    />

                    <label className="block text-gray-700 mb-2">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Register;