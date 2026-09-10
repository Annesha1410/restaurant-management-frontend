import { useState } from "react";
import axios from "axios";

const AddMenuItem = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [availability, setAvailability] = useState(true);
    const [image, setImage] = useState(null);

    const addMenu = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("availability", availability);
        formData.append("image", image);

        try {
            await axios.post(
                "http://localhost:5000/api/menu-items",
                formData
            );

            alert("Menu item added");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-orange-100">

            <form
                onSubmit={addMenu}
                className="bg-white p-8 rounded-lg shadow w-96"
            >

                <h1 className="text-2xl font-bold text-center mb-6">
                    Add Menu Item
                </h1>

                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                />

                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Starter">Starter</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Beverage">Beverage</option>
                </select>

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border p-2 mb-3"
                    required
                />

                <select
                    value={availability}
                    onChange={(e) =>
                        setAvailability(e.target.value === "true")
                    }
                    className="w-full border p-2 mb-3"
                >
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>

                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full mb-5"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-rose-400 text-white p-2 rounded"
                >
                    Add Menu Item
                </button>

            </form>

        </div>
    );
};

export default AddMenuItem;