


// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //     return (
// //         <nav className="bg-pink-100 shadow-sm px-8 py-4">

// //             <div className="max-w-6xl mx-auto flex justify-between items-center">

// //                 <Link
// //                     to="/"
// //                     className="text-2xl font-bold text-rose-600"
// //                 >
// //                   RESTAURANT
// //                 </Link>

// //                 <div className="flex gap-8">


// //                     <Link to="/about" className="text-gray-700 font-medium hover:text-rose-500">
// //                         About
// //                     </Link>

// //                     <Link to="/contact" className="text-gray-700 font-medium hover:text-rose-500">
// //                         Contact Us
// //                     </Link>

// //                     <Link to="/login" className="text-gray-700 font-medium hover:text-rose-500">
// //                         Login
// //                     </Link>

// //                     <Link to="/register" className="text-gray-700 font-medium hover:text-rose-500">
// //                         Register
// //                     </Link>

// //                 </div>

// //             </div>

// //         </nav>
// //     );
// // };

// // export default Navbar;



// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav
//             className="px-8 py-4 shadow-md"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
//             }}
//         >

//             <div className="max-w-7xl mx-auto flex justify-between items-center">

//                 <Link
//                     to="/"
//                     className="text-2xl font-bold text-blue-700"
//                 >
//                     SWAD HOUSE
//                 </Link>

//                 <div className="flex gap-6 items-center">

//                     <Link to="/" className="text-gray-700 hover:text-blue-600">
//                         Home
//                     </Link>

//                     <Link to="/register" className="text-gray-700 hover:text-blue-600"
//                     > Register 
//                     </Link>

                  

//                     <Link to="/about" className="text-gray-700 hover:text-blue-600">
//                         About
//                     </Link>

//                     <Link to="/contact" className="text-gray-700 hover:text-blue-600">
//                         Contact
//                     </Link>

//                     <Link
//                         to="/login"
//                         className=" text-grey-700  hover:bg-blue-600"
//                     >
//                         Login
//                     </Link>

//                 </div>

//             </div>

//         </nav>
//     );
// };

// export default Navbar;





import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="px-8 py-4 shadow-md"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <div className="max-w-7xl mx-auto flex justify-center items-center">

                {/* Navigation Links */}
                <div className="flex gap-8 items-center">

                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Home
                    </Link>

            
                    <Link
                        to="/about"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/login"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;

