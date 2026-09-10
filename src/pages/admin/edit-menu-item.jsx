import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditMenuItem = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [availability, setAvailability] = useState(true);

    useEffect(() => {

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
                setAvailability(item.availability);

            } catch (error) {
                console.log(error);
            }
        };

        getMenuItem();

    }, [id]);

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                `http://localhost:5000/api/menu-items/${id}`,
                {
                    name,
                    desc,
                    category,
                    price,
                    availability
                }
            );

            alert("Menu item updated successfully");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center"
            style={{
                background:
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">
                    Edit Menu Item
                </h1>

                <form onSubmit={handleUpdate}>

                    <input
                        type="text"
                        placeholder="Item Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    <textarea
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    <select
                        value={availability}
                        onChange={(e) =>
                            setAvailability(e.target.value === "true")
                        }
                        className="w-full border px-4 py-2 rounded mb-6"
                    >
                        <option value="true">In Stock</option>
                        <option value="false">Out of Stock</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-rose-400 text-white py-2 rounded"
                    >
                        Update Menu Item
                    </button>

                </form>

            </div>

        </div>
    );
};

export default EditMenuItem;