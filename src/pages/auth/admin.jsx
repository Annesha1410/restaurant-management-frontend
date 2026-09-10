import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-rose-500 text-white px-8 py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    TastyBites Admin
                </h1>

                <button
                    className="bg-white text-rose-500 px-4 py-2 rounded-lg"
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = "/login";
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Dashboard */}
            <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Admin Dashboard
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold">
                            Menu Items
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Manage restaurant menu
                        </p>

                        <Link
                            to="/admin/menu"
                            className="inline-block mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg"
                        >
                            Manage Menu
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold">
                            Users
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Manage registered users
                        </p>

                        <Link
                            to="/admin/users"
                            className="inline-block mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg"
                        >
                            Manage Users
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold">
                            Orders
                        </h3>

                        <p className="text-gray-500 mt-2">
                            View and manage orders
                        </p>

                        <Link
                            to="/admin/orders"
                            className="inline-block mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg"
                        >
                            Manage Orders
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Admin;