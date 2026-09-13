import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {

        try {

            const token = Cookies.get("token");

            const response = await axios.get(
                "https://https-github-com-yourusername-restaurant.onrender.com/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOrders(response.data.data);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to load orders"
            );
        }
    };


    useEffect(() => {
        getOrders();
    }, []);


    const updateStatus = async (id, status) => {

        try {

            const token = Cookies.get("token");

            await axios.put(
                `https://https-github-com-yourusername-restaurant.onrender.com/api/orders/${id}`,
                {
                    status
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getOrders();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to update order"
            );
        }
    };


    const deleteOrder = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this order?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const token = Cookies.get("token");

            await axios.delete(
                `https://https-github-com-yourusername-restaurant.onrender.com/api/orders/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getOrders();

        } catch (error) {

            console.log(error);

            alert("Failed to delete order");
        }
    };


    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-6xl">

                <div className="mb-10">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Admin Panel
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                        Orders
                    </h1>

                    <p className="mt-2 text-[#6b746b]">
                        Manage customer orders.
                    </p>

                </div>


                {orders.length === 0 ? (

                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-12 text-center">

                        <p className="text-lg text-[#6b746b]">
                            No orders yet.
                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {orders.map((order) => (

                            <div
                                key={order._id}
                                className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-6 shadow-sm"
                            >

                                <div className="grid gap-5 md:grid-cols-5 md:items-center">

                                    <div>
                                        <p className="text-sm text-[#718568]">
                                            Customer
                                        </p>

                                        <h2 className="mt-1 font-bold text-[#354936]">
                                            {order.customerName}
                                        </h2>

                                        <p className="text-sm text-[#6b746b]">
                                            {order.customerEmail}
                                        </p>
                                    </div>


                                    <div>

                                        <p className="text-sm text-[#718568]">
                                            Item
                                        </p>

                                        <p className="mt-1 font-semibold text-[#354936]">
                                            {order.itemName}
                                        </p>

                                        <p className="text-sm text-[#6b746b]">
                                            Quantity: {order.quantity}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-sm text-[#718568]">
                                            Total
                                        </p>

                                        <p className="mt-1 text-xl font-bold text-[#354936]">
                                            ₹{order.totalPrice}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="mb-2 text-sm text-[#718568]">
                                            Status
                                        </p>

                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    order._id,
                                                    e.target.value
                                                )
                                            }
                                            className="rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-2"
                                        >

                                            <option value="Pending">
                                                Pending
                                            </option>

                                            <option value="Preparing">
                                                Preparing
                                            </option>

                                            <option value="Completed">
                                                Completed
                                            </option>

                                            <option value="Cancelled">
                                                Cancelled
                                            </option>

                                        </select>

                                    </div>


                                    <div>

                                        <button
                                            onClick={() =>
                                                deleteOrder(order._id)
                                            }
                                            className="rounded-full border border-red-400 px-5 py-2 text-red-600 hover:bg-red-50"
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

export default Orders;