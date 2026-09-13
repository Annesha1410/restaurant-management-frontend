
// import { Link } from "react-router-dom";

// const Home = () => {
//     return (
//         <div
//             className="min-h-screen"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
//             }}
//         >

//             {/* Hero Section */}
//             <section className="min-h-[80vh] flex items-center justify-center px-6">

//                 <div className="text-center max-w-3xl">

//                     <p className="text-lg text-blue-600 font-medium mb-3">
//                         Welcome to
//                     </p>

//                     <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-5">
//                         SWAD HOUSE
//                     </h1>

//                     <p className="text-lg text-gray-700 mb-8">
//                         Delicious food, fresh ingredients and unforgettable
//                         flavours made specially for you.
//                     </p>

//                     <Link
//                         to="/menu"
//                         className="inline-block bg-blue-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//                     >
//                         Explore Our Menu
//                     </Link>

//                 </div>

//             </section>


//             {/* Why Choose Us */}
//             <section className="px-6 pb-16">

//                 <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
//                     Why Choose Us?
//                 </h2>

//                 <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

//                     {/* Fresh Food */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             🥘
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Fresh Food
//                         </h3>

//                         <p className="text-gray-600">
//                             We use fresh ingredients to prepare delicious meals.
//                         </p>

//                     </div>


//                     {/* Made With Love */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             ❤️
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Made With Love
//                         </h3>

//                         <p className="text-gray-600">
//                             Every dish is prepared with care and passion.
//                         </p>

//                     </div>


//                     {/* Best Quality */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             ⭐
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Best Quality
//                         </h3>

//                         <p className="text-gray-600">
//                             Quality food and a great experience for everyone.
//                         </p>

//                     </div>

//                 </div>

//             </section>

//         </div>
//     );
// };

// export default Home;






// import { Link } from "react-router-dom";
// import restaurantImage from "../../assets/restaurant.jpg";

// const Home = () => {
//     return (
//         <div
//             className="min-h-screen"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
//             }}
//         >

//             {/* Hero Section */}
//             <section className="min-h-[80vh] flex items-center justify-center px-6">

//                 <div className="text-center max-w-3xl">

//                     {/* Restaurant Photo */}
//                     <img
//                         src={restaurantImage}
//                         alt="Restaurant food"
//                         className="w-full max-w-lg h-72 object-cover rounded-2xl shadow-lg mx-auto mb-8"
//                     />

//                     <p className="text-lg text-blue-600 font-medium mb-3">
//                         Welcome to
//                     </p>

//                     <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-5">
//                         SWAD HOUSE
//                     </h1>

//                     <p className="text-lg text-gray-700 mb-8">
//                         Delicious food, fresh ingredients and unforgettable
//                         flavours made specially for you.
//                     </p>

//                     <Link
//                         to="/menu"
//                         className="inline-block bg-blue-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//                     >
//                         Explore Our Menu
//                     </Link>

//                 </div>

//             </section>


//             {/* Why Choose Us */}
//             <section className="px-6 pb-16">

//                 <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
//                     Why Choose Us?
//                 </h2>

//                 <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

//                     {/* Fresh Food */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             🥘
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Fresh Food
//                         </h3>

//                         <p className="text-gray-600">
//                             We use fresh ingredients to prepare delicious meals.
//                         </p>

//                     </div>


//                     {/* Made With Love */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             ❤️
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Made With Love
//                         </h3>

//                         <p className="text-gray-600">
//                             Every dish is prepared with care and passion.
//                         </p>

//                     </div>


//                     {/* Best Quality */}
//                     <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center border border-blue-100">

//                         <div className="text-4xl mb-4">
//                             ⭐
//                         </div>

//                         <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                             Best Quality
//                         </h3>

//                         <p className="text-gray-600">
//                             Quality food and a great experience for everyone.
//                         </p>

//                     </div>

//                 </div>

//             </section>

//         </div>
//     );
// };

// export default Home;


import { Link } from "react-router-dom";
import restaurantImage from "../../assets/restaurant.jpg";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#f7f5ef]">

            {/* Hero */}
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#718568]">
                            Welcome to Swad House
                        </p>

                        <h1 className="mt-5 text-5xl font-bold leading-tight text-[#354936] md:text-6xl">
                            A little taste
                            <br />
                            <span className="font-normal">
                                of India.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-[#6b746b]">
                            Authentic Indian flavours, traditional recipes
                            and delicious food made with fresh ingredients
                            and lots of love.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                to="/menu"
                                className="rounded-full bg-[#354936] px-8 py-3 font-medium text-white hover:bg-[#26352a]"
                            >
                                Explore Menu →
                            </Link>

                            {/* Our Story */}
                            <Link
                                to="/about"
                                className="rounded-full border border-[#354936] px-8 py-3 font-medium text-[#354936] hover:bg-[#354936] hover:text-white"
                            >
                                Our Story
                            </Link>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={restaurantImage}
                            alt="Swad House Restaurant"
                            className="h-[400px] w-full max-w-[430px] rounded-[180px_180px_30px_30px] object-cover shadow-xl md:h-[500px]"
                        />
                    </div>

                </div>
            </section>


            {/* Our Story */}
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">

                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#718568]">
                            Our Story
                        </p>

                        <h2 className="mt-3 text-4xl font-bold leading-tight text-[#354936] md:text-5xl">
                            Where every dish
                            <br />
                            tells a story.
                        </h2>

                        <p className="mt-6 leading-8 text-[#6b746b]">
                            Swad House was created with one simple idea —
                            to bring the comforting taste of Indian food
                            to your table.
                        </p>

                        <p className="mt-4 leading-8 text-[#6b746b]">
                            Inspired by traditional recipes, fragrant spices
                            and the joy of sharing a meal, we prepare every
                            dish with care and passion.
                        </p>

                        
                    </div>

                    <div className="rounded-[35px] bg-[#e9e6d9] p-10">

                        <p className="text-6xl">
                            🍛
                        </p>

                        <p className="mt-6 text-2xl leading-9 text-[#354936]">
                            “Good food is not just about taste,
                            it is about the memories we create
                            around the table.”
                        </p>

                        <div className="mt-8 h-px bg-[#c9c5b7]" />

                        <p className="mt-5 text-sm font-medium uppercase tracking-widest text-[#718568]">
                            Authentic • Warm • Indian
                        </p>

                    </div>

                </div>
            </section>


            {/* Taste of India */}
            <section className="bg-[#e9e6d9] px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Taste of India
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#354936] md:text-5xl">
                        Flavours worth remembering
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6b746b]">
                        From fragrant biryanis to comforting curries,
                        Swad House brings the rich and diverse flavours
                        of India to your table.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <span className="rounded-full bg-[#fffdf8] px-6 py-3 text-[#354936]">
                            🍛 North Indian
                        </span>

                        <span className="rounded-full bg-[#fffdf8] px-6 py-3 text-[#354936]">
                            🌶️ Spicy Delights
                        </span>

                        <span className="rounded-full bg-[#fffdf8] px-6 py-3 text-[#354936]">
                            🥘 Traditional Recipes
                        </span>

                        <span className="rounded-full bg-[#fffdf8] px-6 py-3 text-[#354936]">
                            🍚 Rice & Biryanis
                        </span>

                    </div>

                </div>
            </section>


            {/* Menu */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#718568]">
                        Our Menu
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#354936] md:text-5xl">
                        Come hungry, leave happy.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6b746b]">
                        Discover delicious Indian dishes prepared with
                        authentic spices, fresh ingredients and flavours
                        you'll want to come back for.
                    </p>

                    <Link
                        to="/menu"
                        className="mt-8 inline-block rounded-full bg-[#354936] px-8 py-3 font-medium text-white hover:bg-[#26352a]"
                    >
                        View Full Menu →
                    </Link>

                </div>
            </section>


            {/* Bottom CTA */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-5xl rounded-[35px] bg-[#354936] px-6 py-14 text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9cfb9]">
                        Swad House
                    </p>

                    <h2 className="mt-4 text-3xl text-white md:text-4xl">
                        Good food. Great flavours. Indian at heart.
                    </h2>

                    <Link
                        to="/contact"
                        className="mt-7 inline-block rounded-full bg-[#f7f5ef] px-8 py-3 font-medium text-[#354936] hover:bg-white"
                    >
                        Visit Us →
                    </Link>

                </div>
            </section>

        </div>
    );
};

export default Home;