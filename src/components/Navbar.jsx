
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {

    const navigate = useNavigate();

    const token = Cookies.get("token");
    const name = Cookies.get("name");

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("name");
        Cookies.remove("role");

        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-[#ddd8ca] bg-[#f7f5ef]">

            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                     to="/"
    className="logo-font text-3xl font-semibold tracking-wide text-[#354936]"
                >
                  Swad House
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-7">

                    <Link
                        to="/"
                        className="rounded-full border border-[#354936] px-5 py-2 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                    >
                        Home
                    </Link>

                

                    {token ? (
                        <>
                            <span className="font-medium text-[#354936]">
                                Hi, {name} 👋
                            </span>

                            <button
                                onClick={handleLogout}
                                className="rounded-full border border-[#354936] px-5 py-2 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="rounded-full border border-[#354936] px-5 py-2 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Login
                            </Link>

                                                 <Link
    to="/admin-login"
    className="rounded-full border border-[#354936] px-5 py-2 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
>
    Admin
</Link>

                            <Link
                                to="/register"
                                className="rounded-full border border-[#354936] px-5 py-2 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Register
                            </Link>

       
                        </>
                    )}

                </div>

            </div>

        </nav>
    );
};

export default Navbar;