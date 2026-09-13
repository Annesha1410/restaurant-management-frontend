import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://https-github-com-yourusername-restaurant.onrender.com/api/auth/login",
                {
                    email,
                    password
                }
            );

            console.log(response.data);

            const token = response.data.token;
            const role = response.data.data.role;

            if (role !== "admin") {

                alert("This account is not an admin account.");

                return;
            }

            Cookies.set("token", token);
            Cookies.set("role", role);

            alert("Admin login successful");

            navigate("/admin/dashboard");

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
                    Admin Login
                </h1>

                <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-8">

                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >

                        <input
                            type="email"
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#354936] px-6 py-3 font-medium text-white hover:bg-[#26352a]"
                        >
                            Admin Login
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AdminLogin;