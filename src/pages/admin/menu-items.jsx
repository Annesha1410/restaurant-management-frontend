




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);

    const getMenuItems = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/menu-items"
            );

            setMenuItems(response.data.data);
        } catch (error) {
            console.log(error);
            alert("Failed to load menu items");
        }
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    // Delete Menu Item
    const deleteItem = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            const token = Cookies.get("token");

            await axios.delete(
                `http://localhost:5000/api/menu-items/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Menu item deleted successfully");

            getMenuItems();

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete menu item"
            );
        }
    };

    // Available / Unavailable
    const toggleAvailability = async (id, currentStatus) => {
        try {
            const token = Cookies.get("token");

            await axios.put(
                `http://localhost:5000/api/menu-items/${id}`,
                {
                    available: !currentStatus
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getMenuItems();

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to update availability"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    <div>
                        <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                            Admin Panel
                        </p>

                        <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                            Menu Items
                        </h1>

                        <p className="mt-2 text-[#6b746b]">
                            Add, edit, delete and manage menu availability.
                        </p>
                    </div>

                    <Link
                        to="/admin/menu-items/add"
                        className="rounded-full bg-[#354936] px-6 py-3 text-center font-medium text-white hover:bg-[#26352a]"
                    >
                        + Add Menu Item
                    </Link>

                </div>

                {/* Menu Items */}
                {menuItems.length === 0 ? (

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-12 text-center">
                        <p className="text-lg text-[#6b746b]">
                            No menu items found.
                        </p>

                        <Link
                            to="/admin/menu-items/add"
                            className="mt-5 inline-block rounded-full bg-[#354936] px-6 py-3 text-white"
                        >
                            Add First Item
                        </Link>
                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {menuItems.map((item) => (

                            <div
                                key={item._id}
                                className="overflow-hidden rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] shadow-sm"
                            >

                                {/* Image */}
                                <div className="h-56 w-full overflow-hidden bg-[#e9e6d9]">

                                    {item.image?.url ? (

                                        <img
                                            src={item.image.url}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />

                                    ) : (

                                        <div className="flex h-full items-center justify-center text-6xl">
                                            🍽️
                                        </div>

                                    )}

                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    <div className="flex items-start justify-between gap-3">

                                        <div>
                                            <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                                                {item.category}
                                            </p>

                                            <h2 className="mt-2 text-2xl font-bold text-[#354936]">
                                                {item.name}
                                            </h2>
                                        </div>

                                        {/* Status */}
                                        <span
                                            className={
                                                item.available
                                                    ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                                                    : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
                                            }
                                        >
                                            {item.available
                                                ? "Available"
                                                : "Unavailable"}
                                        </span>

                                    </div>

                                    {/* Description */}
                                    <p className="mt-3 line-clamp-3 leading-7 text-[#6b746b]">
                                        {item.desc}
                                    </p>

                                    {/* Price */}
                                    <p className="mt-5 text-xl font-bold text-[#354936]">
                                        ₹{item.price}
                                    </p>

                                    {/* Availability Button */}
                                    <button
                                        onClick={() =>
                                            toggleAvailability(
                                                item._id,
                                                item.available
                                            )
                                        }
                                        className={
                                            item.available
                                                ? "mt-5 w-full rounded-full border border-red-300 px-5 py-2.5 font-medium text-red-600 hover:bg-red-50"
                                                : "mt-5 w-full rounded-full border border-green-300 px-5 py-2.5 font-medium text-green-700 hover:bg-green-50"
                                        }
                                    >
                                        {item.available
                                            ? "Mark Unavailable"
                                            : "Mark Available"}
                                    </button>

                                    {/* Edit & Delete */}
                                    <div className="mt-4 flex gap-3">

                                        <Link
                                            to={`/admin/menu-items/edit/${item._id}`}
                                            className="flex-1 rounded-full bg-[#354936] px-5 py-2.5 text-center font-medium text-white hover:bg-[#26352a]"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() =>
                                                deleteItem(item._id)
                                            }
                                            className="flex-1 rounded-full border border-red-500 px-5 py-2.5 font-medium text-red-600 hover:bg-red-50"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default MenuItems;
