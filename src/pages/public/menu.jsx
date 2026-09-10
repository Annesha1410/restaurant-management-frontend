import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {

    const [menu, setMenu] = useState([]);

    const getMenu = async () => {
        const response = await axios.get(
            "https://https-github-com-YourUsername-restaurant.onrender.com/api/menu-items"
        );

        setMenu(response.data.data);
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div
            className="min-h-screen p-10"
            style={{
                background:
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <h1 className="text-4xl font-bold text-center mb-10">
                Our Menu
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {menu.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white p-5 rounded-lg shadow"
                    >

                        <img
                            src={item.image?.url}
                            className="w-full h-40 object-cover rounded"
                        />

                        <h2 className="text-xl font-bold mt-4">
                            {item.name}
                        </h2>

                        <p className="mt-2">
                            {item.desc}
                        </p>

                        <p className="font-bold mt-2">
                            ₹{item.price}
                        </p>

                        <Link
                            to={`/menu/${item._id}`}
                            className="inline-block mt-4 bg-pink-500 text-white px-4 py-2 rounded"
                        >
                            View
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Menu;