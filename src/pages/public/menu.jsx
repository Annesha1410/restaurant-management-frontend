import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {

    const [menu, setMenu] = useState([]);

    const getMenu = async () => {

        try {

            const response = await axios.get(
                "https://https-github-com-yourusername-restaurant.onrender.com/api/menu-items"
            );

            setMenu(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div
            className="min-h-screen p-10"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
                Our Menu
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {menu.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white/95 p-5 rounded-xl shadow-lg border border-blue-100"
                    >

                        <img
                            src={item.image?.url}
                            alt={item.name}
                            className="w-full h-40 object-cover rounded-lg"
                        />

                        <h2 className="text-xl font-bold text-blue-700 mt-4">
                            {item.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {item.desc}
                        </p>

                        <p className="font-bold text-blue-600 mt-2">
                            ₹{item.price}
                        </p>

                        <Link
                            to={`/menu/${item._id}`}
                            className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            View Details
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Menu;

