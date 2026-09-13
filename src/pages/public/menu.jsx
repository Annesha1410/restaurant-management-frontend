





import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

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


    // Get categories from database
    const categories = [
    "All",
    "Starter",
    "Main Course",
    "Dessert",
    "Beverage"
];


    // Show selected category
    const filteredMenu =
        selectedCategory === "All"
            ? menu
            : menu.filter(
                (item) => item.category === selectedCategory
            );


    return (
        <div className="min-h-screen bg-[#f7f5ef] px-6 py-14">

            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-10 text-center">

                    <p className="font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Discover
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-[#354936] md:text-5xl">
                        Our Menu
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-[#6b746b]">
                        Explore our delicious Indian dishes.
                    </p>

                </div>


                {/* Category Buttons */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={
                                selectedCategory === category
                                    ? "rounded-full bg-[#354936] px-6 py-3 font-medium text-white"
                                    : "rounded-full border border-[#354936] bg-transparent px-6 py-3 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>


                {/* Food Items */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                    {filteredMenu.map((item) => (

                        <div
                            key={item._id}
                            className="overflow-hidden rounded-3xl border border-[#ddd8ca] bg-[#fffdf8] shadow-sm"
                        >

                            {/* Image */}
                            <div className="h-56 w-full overflow-hidden bg-[#e9e6d9]">

                                {item.image?.url ? (

                                    <img
                                        src={item.image.url}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />

                                ) : (

                                    <div className="flex h-full items-center justify-center text-5xl">
                                        🍽️
                                    </div>

                                )}

                            </div>


                            {/* Details */}
                            <div className="p-6">

                                <p className="text-sm font-medium uppercase tracking-wide text-[#718568]">
                                    {item.category}
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#354936]">
                                    {item.name}
                                </h2>

                                <p className="mt-3 leading-7 text-[#6b746b]">
                                    {item.desc}
                                </p>

                                <div className="mt-6 flex items-center justify-between">

                                    <p className="text-xl font-bold text-[#354936]">
                                        ₹{item.price}
                                    </p>

                                    <Link
                                        to={`/menu/${item._id}`}
                                        className="rounded-full bg-[#354936] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#26352a]"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* No items */}
                {filteredMenu.length === 0 && (

                    <div className="py-16 text-center">

                        <p className="text-lg text-[#6b746b]">
                            No dishes found in this category.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Menu;

