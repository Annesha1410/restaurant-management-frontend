
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AddMenuItem = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = Cookies.get("token");

            const formData = new FormData();

            formData.append("name", name);
            formData.append("desc", desc);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("available", available);

            if (image) {
                formData.append("image", image);
            }

            await axios.post(
                "http://localhost:5000/api/menu-items",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Menu item added successfully");

            navigate("/admin/menu-items");

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to add menu item"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-2xl">

                {/* Heading */}

                <div className="mb-8">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Admin Panel
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                        Add Menu Item
                    </h1>

                    <p className="mt-2 text-[#6b746b]">
                        Add a new dish to the Swad House menu.
                    </p>

                </div>


                {/* Form Card */}

                <div className="rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] p-8 shadow-sm">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Name */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Item Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter item name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                            />

                        </div>


                        {/* Description */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Description
                            </label>

                            <textarea
                                placeholder="Enter item description"
                                value={desc}
                                onChange={(e) =>
                                    setDesc(e.target.value)
                                }
                                required
                                rows="4"
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                            />

                        </div>


                        {/* Category */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Category
                            </label>

                            <select
                                value={category}
                                onChange={(e) =>
                                    setCategory(e.target.value)
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                            >

                                <option value="">
                                    Select Category
                                </option>

                                <option value="Starter">
                                    Starter
                                </option>

                                <option value="Main Course">
                                    Main Course
                                </option>

                                <option value="Biryani">
                                    Biryani
                                </option>

                                <option value="Dessert">
                                    Dessert
                                </option>

                                <option value="Beverage">
                                    Beverage
                                </option>

                            </select>

                        </div>


                        {/* Price */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Price
                            </label>

                            <input
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) =>
                                    setPrice(e.target.value)
                                }
                                required
                                min="0"
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                            />

                        </div>


                        {/* Availability */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Availability
                            </label>

                            <select
                                value={available ? "true" : "false"}
                                onChange={(e) =>
                                    setAvailable(
                                        e.target.value === "true"
                                    )
                                }
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 outline-none focus:border-[#718568]"
                            >

                                <option value="true">
                                    Available
                                </option>

                                <option value="false">
                                    Unavailable
                                </option>

                            </select>

                        </div>


                        {/* Image */}

                        <div>

                            <label className="mb-2 block font-medium text-[#354936]">
                                Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setImage(e.target.files[0])
                                }
                                required
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 text-[#6b746b]"
                            />

                        </div>


                        {/* Buttons */}

                        <div className="flex gap-4 pt-3">

                            <button
                                type="submit"
                                className="flex-1 rounded-full bg-[#354936] px-6 py-3 font-medium text-white hover:bg-[#26352a]"
                            >
                                Add Menu Item
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/admin/menu-items")
                                }
                                className="flex-1 rounded-full border border-[#354936] px-6 py-3 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddMenuItem;






