
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const EditMenuItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);
    const [image, setImage] = useState(null);

    const getMenuItem = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/menu-items/${id}`
            );

            const item = response.data.data;

            setName(item.name);
            setDesc(item.desc);
            setCategory(item.category);
            setPrice(item.price);
            setAvailable(item.available);

        } catch (error) {
            console.log(error);
            alert("Failed to load menu item");
        }
    };

    useEffect(() => {
        getMenuItem();
    }, [id]);

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

            await axios.put(
                `http://localhost:5000/api/menu-items/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Menu item updated successfully");

            navigate("/admin/menu-items");

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to update menu item"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-12">

            <div className="mx-auto max-w-2xl">

                <div className="mb-8">
                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Admin Panel
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#354936]">
                        Edit Menu Item
                    </h1>

                    <p className="mt-2 text-[#6b746b]">
                        Update your menu item details.
                    </p>
                </div>

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

                        {/* New Image */}
                        <div>
                            <label className="mb-2 block font-medium text-[#354936]">
                                Change Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setImage(e.target.files[0])
                                }
                                className="w-full rounded-xl border border-[#ddd8ca] bg-[#f7f5ef] px-4 py-3 text-[#6b746b]"
                            />

                            <p className="mt-2 text-sm text-[#6b746b]">
                                Leave empty if you don't want to change the image.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-3">

                            <button
                                type="submit"
                                className="flex-1 rounded-full bg-[#354936] px-6 py-3 font-medium text-white hover:bg-[#26352a]"
                            >
                                Update Menu Item
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

export default EditMenuItem;

