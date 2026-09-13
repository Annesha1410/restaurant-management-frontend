
// const About = () => {
//     return (
//         <div
//             className="min-h-screen px-6 py-16"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
//             }}
//         >

//             <div className="max-w-4xl mx-auto">

//                 <div className="text-center mb-12">

//                     <h1 className="text-4xl font-bold text-blue-800">
//                         About Swad House
//                     </h1>

//                     <p className="text-gray-600 mt-4 text-lg">
//                         A place where delicious food meets a warm atmosphere.
//                     </p>

//                 </div>


                
//                 <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100 mb-8">

//                     <h2 className="text-2xl font-bold text-blue-700 mb-4">
//                         Our Story
//                     </h2>

//                     <p className="text-gray-700 leading-7">
//                         Swad House was created with a simple idea — to serve
//                         delicious food that brings people together. We prepare
//                         every dish with fresh ingredients and careful attention
//                         to taste and quality.
//                     </p>

//                 </div>


                
//                 <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100 mb-8">

//                     <h2 className="text-2xl font-bold text-blue-700 mb-4">
//                         Our Mission
//                     </h2>

//                     <p className="text-gray-700 leading-7">
//                         Our mission is to provide tasty, fresh and enjoyable
//                         meals while making every visit a pleasant experience
//                         for our customers.
//                     </p>

//                 </div>


//                 <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-blue-100">

//                     <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
//                         What We Serve
//                     </h2>

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//                         <div className="text-center p-4 bg-blue-50 rounded-lg">
//                             <p className="text-2xl">🥗</p>
//                             <p className="text-blue-700 font-semibold mt-2">
//                                 Starters
//                             </p>
//                         </div>

//                         <div className="text-center p-4 bg-blue-50 rounded-lg">
//                             <p className="text-2xl">🍛</p>
//                             <p className="text-blue-700 font-semibold mt-2">
//                                 Main Course
//                             </p>
//                         </div>

//                         <div className="text-center p-4 bg-blue-50 rounded-lg">
//                             <p className="text-2xl">🍰</p>
//                             <p className="text-blue-700 font-semibold mt-2">
//                                 Desserts
//                             </p>
//                         </div>

//                         <div className="text-center p-4 bg-blue-50 rounded-lg">
//                             <p className="text-2xl">🥤</p>
//                             <p className="text-blue-700 font-semibold mt-2">
//                                 Beverages
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default About;


import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen bg-[#f7f5ef] text-[#26352a]">

            {/* Hero */}
            <section className="px-6 py-20 text-center">

                <p className="text-sm font-semibold uppercase tracking-[4px] text-[#718568]">
                    About Us
                </p>

                <h1 className="mt-3 text-5xl font-bold md:text-6xl">
                    More than just a meal.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#707970]">
                    At Swad House, we believe good food brings people together.
                    Our kitchen combines traditional flavours with a modern,
                    welcoming dining experience.
                </p>

            </section>

            {/* Story */}
            <section className="bg-[#e9e6d9] px-6 py-20">

                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#718568]">
                            Our Story
                        </p>

                        <h2 className="mt-3 text-4xl font-bold">
                            Made with warmth, served with heart.
                        </h2>

                        <p className="mt-6 leading-8 text-[#667267]">
                            Swad House started with a simple idea — create a place
                            where delicious food and warm hospitality come together.
                        </p>

                        <p className="mt-4 leading-8 text-[#667267]">
                            From carefully selected ingredients to the final plate,
                            we focus on quality, flavour and an experience that
                            feels like home.
                        </p>

                    </div>

                    <div className="rounded-[35px] bg-[#52634f] p-10 text-white shadow-xl">

                        <div className="text-6xl">
                            🌿
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            Fresh ingredients
                        </h3>

                        <p className="mt-4 leading-7 text-[#e3eadf]">
                            We believe great food begins with fresh and carefully
                            selected ingredients.
                        </p>

                    </div>

                </div>

            </section>

            {/* Values */}
            <section className="mx-auto max-w-6xl px-6 py-20">

                <div className="grid gap-6 md:grid-cols-3">

                    <div className="rounded-[28px] bg-[#fffdf8] p-8 shadow-sm">
                        <div className="text-4xl">🥗</div>
                        <h3 className="mt-5 text-2xl font-bold">
                            Fresh
                        </h3>
                        <p className="mt-3 text-[#707970]">
                            Fresh ingredients prepared with care.
                        </p>
                    </div>

                    <div className="rounded-[28px] bg-[#fffdf8] p-8 shadow-sm">
                        <div className="text-4xl">❤️</div>
                        <h3 className="mt-5 text-2xl font-bold">
                            Homemade
                        </h3>
                        <p className="mt-3 text-[#707970]">
                            Food inspired by comforting homemade flavours.
                        </p>
                    </div>

                    <div className="rounded-[28px] bg-[#fffdf8] p-8 shadow-sm">
                        <div className="text-4xl">✨</div>
                        <h3 className="mt-5 text-2xl font-bold">
                            Quality
                        </h3>
                        <p className="mt-3 text-[#707970]">
                            We care about every detail of your dining experience.
                        </p>
                    </div>

                </div>

                <div className="mt-14 text-center">
                    <Link
                        to="/menu"
                        className="inline-block rounded-full bg-[#52634f] px-8 py-4 font-semibold text-white hover:bg-[#3f503d]"
                    >
                        Explore Our Menu
                    </Link>
                </div>

            </section>

        </div>
    );
}

export default About;