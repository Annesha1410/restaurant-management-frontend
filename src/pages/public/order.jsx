import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const item = location.state?.item;

    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [quantity, setQuantity] = useState(1);

    if (!item) {
        return (
            <div className="min-h-screen bg-[#f7f5ef] px-6 py-16 text-center">

                <h1 className="text-3xl font-bold text-[#354936]">
                    No item selected
                </h1>

                <button
                    onClick={() => navigate("/menu")}
                    className="mt-6 rounded-full bg-[#354936] px-6 py-3 text-white"
                >
                    Go to Menu
                </button>

            </div>
        );
    }

    const totalPrice = item.price * quantity;

    const handleOrder = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/orders",
                {
                    customerName,
                    customerEmail,
                    itemName: item.name,
                    quantity,
                    totalPrice
                }
            );

            alert("Order placed successfully!");

            navigate("/menu");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to place order"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-4xl">

                <div className="mb-8">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Swad House
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                        Place Your Order
                    </h1>

                </div>


                <div className="grid gap-8 md:grid-cols-2">

                    {/* Food */}
                    <div className="overflow-hidden rounded-3xl border border-[#ddd8ca] bg-[#fffdf8]">

                        {item.image?.url && (
                            <img
                                src={item.image.url}
                                alt={item.name}
                                className="h-72 w-full object-cover"
                            />
                        )}

                        <div className="p-6">

                            <p className="text-sm uppercase tracking-wide text-[#718568]">
                                {item.category}
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#354936]">
                                {item.name}
                            </h2>

                            <p className="mt-3 text-[#6b746b]">
                                {item.desc}
                            </p>

                            <p className="mt-5 text-2xl font-bold text-[#354936]">
                                ₹{item.price}
                            </p>

                        </div>

                    </div>


                    {/* Form */}
                    <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-8">

                        <form
                            onSubmit={handleOrder}
                            className="space-y-5"
                        >

                            <div>

                                <label className="mb-2 block font-medium text-[#354936]">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) =>
                                        setCustomerName(e.target.value)
                                    }
                                    required
                                    className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3"
                                    placeholder="Enter your name"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-[#354936]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={customerEmail}
                                    onChange={(e) =>
                                        setCustomerEmail(e.target.value)
                                    }
                                    required
                                    className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3"
                                    placeholder="Enter your email"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-[#354936]">
                                    Quantity
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(Number(e.target.value))
                                    }
                                    required
                                    className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3"
                                />

                            </div>


                            <div className="rounded-2xl bg-[#e9e6d9] p-5">

                                <p className="text-[#6b746b]">
                                    Total Amount
                                </p>

                                <p className="mt-1 text-3xl font-bold text-[#354936]">
                                    ₹{totalPrice}
                                </p>

                            </div>


                            <button
                                type="submit"
                                className="w-full rounded-full bg-[#354936] px-6 py-3 font-medium text-white hover:bg-[#26352a]"
                            >
                                Place Order
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Order;