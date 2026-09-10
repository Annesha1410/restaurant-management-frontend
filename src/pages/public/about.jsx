const About = () => {
    return (
        <div
            className="min-h-screen py-20 px-5"
            style={{
                background:
                    "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
            }}
        >

            <div className="max-w-4xl mx-auto text-center">

                <h1 className="text-4xl font-bold text-rose-600">
                    About Restaurant
                </h1>

                <p className="text-gray-700 text-lg mt-6">
                    Welcome to Restaurant, your favorite place for
                    delicious and freshly prepared food.
                </p>

                <p className="text-gray-700 mt-4">
                    We believe that good food brings people together.
                    Our restaurant offers tasty dishes made with
                    fresh ingredients and lots of love.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/80 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold text-rose-500">
                            Fresh Food
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Fresh and quality ingredients.
                        </p>
                    </div>

                    <div className="bg-white/80 p-6 rounded-xl shadow"> 
                        <h2 className="text-xl font-bold text-rose-500">
                            Great Taste
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Delicious food made with care.
                        </p>
                    </div>

                    <div className="bg-white/80 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold text-rose-500">
                            Happy Customers
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Your happiness is our priority.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;