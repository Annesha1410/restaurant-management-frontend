import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const MenuItems = () => {

    const [menu, setMenu] = useState([]);

    const getMenu = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/menu-items"
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
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <h1 className="text-4xl font-bold text-center text-rose-600 mb-10">
                Menu Items
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {menu.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white p-5 rounded-xl shadow"
                    >

                        <img
                            src={item.image?.url}
                            alt={item.name}
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

                        <p className="mt-2">
                            {item.availability
                                ? "In Stock"
                                : "Out of Stock"}
                        </p>

                        <Link
                            to={`/admin/edit-menu-item/${item._id}`}
                            className="inline-block mt-4 bg-rose-400 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default MenuItems;