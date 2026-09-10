


import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-pink-100 shadow-sm px-8 py-4">

            <div className="max-w-6xl mx-auto flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold text-rose-600"
                >
                  RESTAURANT
                </Link>

                <div className="flex gap-8">


                    <Link to="/about" className="text-gray-700 font-medium hover:text-rose-500">
                        About
                    </Link>

                    <Link to="/contact" className="text-gray-700 font-medium hover:text-rose-500">
                        Contact Us
                    </Link>

                    <Link to="/login" className="text-gray-700 font-medium hover:text-rose-500">
                        Login
                    </Link>

                    <Link to="/register" className="text-gray-700 font-medium hover:text-rose-500">
                        Register
                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;