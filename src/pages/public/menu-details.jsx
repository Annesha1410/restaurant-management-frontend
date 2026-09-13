


import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MenuDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMenuItem = async () => {
        try {

            const response = await axios.get(
                `https://https-github-com-yourusername-restaurant.onrender.com/api/menu-items/${id}`
            );

            setItem(response.data.data);

        } catch (error) {

            console.log(error);

            setItem(null);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        getMenuItem();
    }, [id]);


    // Loading
    if (loading) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f5ef]">

                <p className="text-lg text-[#6b746b]">
                    Loading dish...
                </p>

            </div>
        );
    }


    // Item not found
    if (!item) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f5ef] px-6">

                <div className="text-center">

                    <div className="mb-5 text-6xl">
                        🍽️
                    </div>

                    <h1 className="text-4xl font-bold text-[#26352a]">
                        Dish not found
                    </h1>

                    <p className="mt-3 text-[#707970]">
                        This dish could not be found.
                    </p>

                    <Link
                        to="/menu"
                        className="mt-7 inline-block rounded-full bg-[#354936] px-7 py-3 font-semibold text-white hover:bg-[#26352a]"
                    >
                        Back to Menu
                    </Link>

                </div>

            </div>
        );
    }


    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-16">

            <div className="mx-auto max-w-5xl">

                {/* Back to Menu */}

                <Link
                    to="/menu"
                    className="text-sm font-semibold text-[#718568] hover:text-[#354936]"
                >
                    ← Back to Menu
                </Link>


                {/* Main Card */}

                <div className="mt-8 grid overflow-hidden rounded-[35px] border border-[#ddd8ca] bg-[#fffdf8] shadow-xl md:grid-cols-2">


                    {/* Image */}

                    <div className="min-h-[400px] bg-[#e9e6d9]">

                        {item.image?.url ? (

                            <img
                                src={item.image.url}
                                alt={item.name}
                                className="h-full min-h-[400px] w-full object-cover"
                            />

                        ) : (

                            <div className="flex min-h-[400px] items-center justify-center text-8xl">
                                🍽️
                            </div>

                        )}

                    </div>


                    {/* Details */}

                    <div className="flex flex-col justify-center p-8 md:p-12">

                        {/* Category */}

                        <span className="w-fit rounded-full bg-[#dfe7d9] px-4 py-2 text-sm font-semibold text-[#52634f]">
                            {item.category}
                        </span>


                        {/* Name */}

                        <h1 className="mt-5 text-4xl font-bold text-[#26352a] md:text-5xl">
                            {item.name}
                        </h1>


                        {/* Description */}

                        <p className="mt-6 leading-8 text-[#707970]">
                            {item.desc}
                        </p>


                        {/* Price */}

                        <div className="mt-8 text-3xl font-bold text-[#354936]">
                            ₹{item.price}
                        </div>


                        {/* Availability */}

                        <div className="mt-5">

                            {item.available ? (

                                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                    Available
                                </span>

                            ) : (

                                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                                    Currently Unavailable
                                </span>

                            )}

                        </div>


                        {/* Buttons */}

                        <div className="mt-8 flex flex-wrap gap-4">

                            {item.available && (

                                <button
                                    onClick={() =>
                                        navigate("/order", {
                                            state: {
                                                item: item
                                            }
                                        })
                                    }
                                    className="rounded-full bg-[#354936] px-7 py-3 font-semibold text-white hover:bg-[#26352a]"
                                >
                                    Order Now
                                </button>

                            )}


                            <Link
                                to="/contact"
                                className="rounded-full border border-[#354936] px-7 py-3 font-semibold text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MenuDetails;

