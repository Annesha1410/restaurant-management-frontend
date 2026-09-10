import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)",
      }}
    >
      <section className="py-32 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Restaurant
        </h1>

        <p className="text-xl text-gray-700 mt-5">We serve food for everyone</p>
        <Link
          to="/menu"
          className="mt-8 inline-block bg-white text-gray-800 px-6 py-3 rounded-lg shadow hover:text-rose-500 font-medium"
        >
          Explore Our Menu
        </Link>
      </section>
    </div>
  );
};

export default Home;

// function Home() {
//     return (
//         <div>
//             <h1>Hello TastyBites</h1>
//             <h2>React is working</h2>
//         </div>
//     );
// }

// export default Home;
