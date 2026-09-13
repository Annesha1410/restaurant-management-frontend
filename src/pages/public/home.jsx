



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