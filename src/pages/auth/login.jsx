
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email: email,
                    password: password
                }
            );

            console.log(response.data);

            // Get data from backend
            const token = response.data.token;
            const name = response.data.data.name;
            const role = response.data.data.role;

            // Save login information
            Cookies.set("token", token);
            Cookies.set("name", name);
            Cookies.set("role", role);

            alert("Login successful");

            // Normal user goes to Home
            navigate("/");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-16">

            <div className="mx-auto max-w-md">

                <h1 className="mb-8 text-center text-4xl font-bold text-[#354936]">
                    Login
                </h1>

                <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#354936] px-6 py-3 font-medium text-white hover:bg-[#26352a]"
                        >
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Login;


