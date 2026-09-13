



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    name: name,
                    email: email,
                    password: password
                }
            );

            console.log(response.data);

            alert("Registration successful");

            // Go to login page
            navigate("/login");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-16">

            <div className="mx-auto max-w-md">

                {/* Heading */}
                <div className="mb-8 text-center">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Welcome
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-[#354936]">
                        Create Account
                    </h1>

                    <p className="mt-3 text-[#6b746b]">
                        Join Swad House and enjoy delicious food.
                    </p>

                </div>

                {/* Register Box */}
                <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-8 shadow-sm">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Name */}
                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 text-[#354936] outline-none focus:border-[#718568]"
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 text-[#354936] outline-none focus:border-[#718568]"
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 text-[#354936] outline-none focus:border-[#718568]"
                            />

                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#354936] px-6 py-3 font-medium text-white transition hover:bg-[#26352a]"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">

                        <p className="text-[#6b746b]">
                            Already have an account?
                        </p>

                        <Link
                            to="/login"
                            className="mt-1 inline-block font-semibold text-[#354936] hover:text-[#718568]"
                        >
                            Login here
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;

