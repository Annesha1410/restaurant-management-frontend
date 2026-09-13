import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Dashboard = () => {

    const [totalMenuItems, setTotalMenuItems] = useState(0);
    const [availableItems, setAvailableItems] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    // Get Menu Items
    const getMenuItems = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/menu-items"
            );

            const menuItems = response.data.data;

            setTotalMenuItems(menuItems.length);

            const available = menuItems.filter(
                (item) => item.available === true
            );

            setAvailableItems(available.length);

        } catch (error) {

            console.log(error);

        }
    };


    // Get Users
    const getUsers = async () => {

        try {

            const token = Cookies.get("token");

            const response = await axios.get(
                "http://localhost:5000/api/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setTotalUsers(response.data.data.length);

        } catch (error) {

            console.log(error);

        }
    };


    // Get Orders
    const getOrders = async () => {

        try {

            const token = Cookies.get("token");

            const response = await axios.get(
                "http://localhost:5000/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setTotalOrders(response.data.data.length);

        } catch (error) {

            console.log(error);

        }
    };


    // Load all dashboard data
    useEffect(() => {

        getMenuItems();
        getUsers();
        getOrders();

    }, []);


    const unavailableItems =
        totalMenuItems - availableItems;


    return (

        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <div className="mb-10">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Swad House
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                        Admin Dashboard
                    </h1>

                    <p className="mt-2 text-[#6b746b]">
                        Manage your restaurant from one place.
                    </p>

                </div>


                {/* Dashboard Cards */}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">


                    {/* Total Menu */}

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-7 shadow-sm">

                        <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                            Total Menu Items
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#354936]">
                            {totalMenuItems}
                        </h2>

                        <p className="mt-2 text-[#6b746b]">
                            All dishes
                        </p>

                    </div>


                    {/* Available */}

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-7 shadow-sm">

                        <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                            Available Items
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#354936]">
                            {availableItems}
                        </h2>

                        <p className="mt-2 text-[#6b746b]">
                            Currently available
                        </p>

                    </div>


                    {/* Unavailable */}

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-7 shadow-sm">

                        <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                            Unavailable Items
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#354936]">
                            {unavailableItems}
                        </h2>

                        <p className="mt-2 text-[#6b746b]">
                            Currently unavailable
                        </p>

                    </div>


                    {/* Total Users */}

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-7 shadow-sm">

                        <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                            Total Users
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#354936]">
                            {totalUsers}
                        </h2>

                        <p className="mt-2 text-[#6b746b]">
                            Registered users
                        </p>

                    </div>

                </div>


                {/* Orders Card */}

                <div className="mt-6">

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-7 shadow-sm">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                                    Total Orders
                                </p>

                                <h2 className="mt-3 text-4xl font-bold text-[#354936]">
                                    {totalOrders}
                                </h2>

                                <p className="mt-2 text-[#6b746b]">
                                    Customer orders
                                </p>

                            </div>

                            <Link
                                to="/admin/orders"
                                className="rounded-full bg-[#354936] px-6 py-3 text-center font-medium text-white hover:bg-[#26352a]"
                            >
                                View Orders
                            </Link>

                        </div>

                    </div>

                </div>


                {/* Quick Actions */}

                <div className="mt-10">

                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Quick Actions
                    </p>


                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">


                        {/* Manage Menu */}

                        <Link
                            to="/admin/menu-items"
                            className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-6 transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <h2 className="text-xl font-bold text-[#354936]">
                                Manage Menu
                            </h2>

                            <p className="mt-2 text-[#6b746b]">
                                Add, edit, delete and manage menu items.
                            </p>

                            <p className="mt-5 font-medium text-[#718568]">
                                Open Menu →
                            </p>

                        </Link>


                        {/* Add Menu */}

                        <Link
                            to="/admin/menu-items/add"
                            className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-6 transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <h2 className="text-xl font-bold text-[#354936]">
                                Add Menu Item
                            </h2>

                            <p className="mt-2 text-[#6b746b]">
                                Add a new dish to your restaurant menu.
                            </p>

                            <p className="mt-5 font-medium text-[#718568]">
                                Add Item →
                            </p>

                        </Link>


                        {/* Orders */}

                        <Link
                            to="/admin/orders"
                            className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-6 transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <h2 className="text-xl font-bold text-[#354936]">
                                Manage Orders
                            </h2>

                            <p className="mt-2 text-[#6b746b]">
                                View customer orders and update their status.
                            </p>

                            <p className="mt-5 font-medium text-[#718568]">
                                View Orders →
                            </p>

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Dashboard;