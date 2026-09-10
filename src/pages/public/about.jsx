
const About = () => {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl font-bold text-blue-800">
                        About Swad House
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        A place where delicious food meets a warm atmosphere.
                    </p>

                </div>


                {/* Our Story */}
                <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100 mb-8">

                    <h2 className="text-2xl font-bold text-blue-700 mb-4">
                        Our Story
                    </h2>

                    <p className="text-gray-700 leading-7">
                        Swad House was created with a simple idea — to serve
                        delicious food that brings people together. We prepare
                        every dish with fresh ingredients and careful attention
                        to taste and quality.
                    </p>

                </div>


                {/* Our Mission */}
                <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100 mb-8">

                    <h2 className="text-2xl font-bold text-blue-700 mb-4">
                        Our Mission
                    </h2>

                    <p className="text-gray-700 leading-7">
                        Our mission is to provide tasty, fresh and enjoyable
                        meals while making every visit a pleasant experience
                        for our customers.
                    </p>

                </div>


                {/* What We Serve */}
                <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100">

                    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                        What We Serve
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-2xl">🥗</p>
                            <p className="text-blue-700 font-semibold mt-2">
                                Starters
                            </p>
                        </div>

                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-2xl">🍛</p>
                            <p className="text-blue-700 font-semibold mt-2">
                                Main Course
                            </p>
                        </div>

                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-2xl">🍰</p>
                            <p className="text-blue-700 font-semibold mt-2">
                                Desserts
                            </p>
                        </div>

                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-2xl">🥤</p>
                            <p className="text-blue-700 font-semibold mt-2">
                                Beverages
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;

