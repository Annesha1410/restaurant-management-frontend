
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center px-6">

                <div className="text-center max-w-3xl">

                    <p className="text-lg text-blue-600 font-medium mb-3">
                        Welcome to
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-5">
                        SWAD HOUSE
                    </h1>

                    <p className="text-lg text-gray-700 mb-8">
                        Delicious food, fresh ingredients and unforgettable
                        flavours made specially for you.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block bg-blue-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Explore Our Menu
                    </Link>

                </div>

            </section>


            {/* Why Choose Us */}
            <section className="px-6 pb-16">

                <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
                    Why Choose Us?
                </h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Fresh Food */}
                    <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

                        <div className="text-4xl mb-4">
                            🥘
                        </div>

                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Fresh Food
                        </h3>

                        <p className="text-gray-600">
                            We use fresh ingredients to prepare delicious meals.
                        </p>

                    </div>


                    {/* Made With Love */}
                    <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

                        <div className="text-4xl mb-4">
                            ❤️
                        </div>

                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Made With Love
                        </h3>

                        <p className="text-gray-600">
                            Every dish is prepared with care and passion.
                        </p>

                    </div>


                    {/* Best Quality */}
                    <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

                        <div className="text-4xl mb-4">
                            ⭐
                        </div>

                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Best Quality
                        </h3>

                        <p className="text-gray-600">
                            Quality food and a great experience for everyone.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;



