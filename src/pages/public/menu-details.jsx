import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MenuDetails = () => {

    const { id } = useParams();

    const [menuItem, setMenuItem] = useState(null);

    const getMenuItem = async () => {
        try {

            const response = await axios.get(
                `https://https-github-com-yourusername-restaurant.onrender.com/api/menu-items/${id}`
            );

            setMenuItem(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenuItem();
    }, [id]);

    if (!menuItem) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div
            className="min-h-screen flex justify-center items-center p-10"
            style={{
                background:
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <div className="bg-white rounded-xl shadow-lg p-8 w-96">

                <img
                    src={menuItem.image?.url}
                    alt={menuItem.name}
                    className="w-full h-48 object-cover rounded-lg"
                />

                <h1 className="text-3xl font-bold text-rose-600 mt-5">
                    {menuItem.name}
                </h1>

                <p className="text-gray-600 mt-3">
                    {menuItem.desc}
                </p>

                <p className="mt-3">
                    Category: {menuItem.category}
                </p>

                <p className="text-xl font-bold text-rose-600 mt-3">
                    ₹{menuItem.price}
                </p>

                <p className="mt-3">
                    {menuItem.availability
                        ? "In Stock"
                        : "Out of Stock"}
                </p>

            </div>

        </div>
    );
};

export default MenuDetails;