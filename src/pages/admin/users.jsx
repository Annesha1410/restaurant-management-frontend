// import { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {

//     const [users, setUsers] = useState([]);

//     const getUsers = async () => {

//         try {

//             const response = await axios.get(
//                 "https://https-github-com-yourusername-restaurant.onrender.com/api/auth/users"
//             );

//             setUsers(response.data.data);

//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getUsers();
//     }, []);

//     return (
//         <div
//             className="min-h-screen p-10"
//             style={{
//                 background:
//                     "linear-gradient(to right, #fed7aa, #fecdd3, #fbcfe8)"
//             }}
//         >

//             <h1 className="text-4xl font-bold text-center text-rose-600 mb-10">
//                 Users
//             </h1>

//             <div className="bg-white rounded-xl shadow p-5">

//                 {users.map((user) => (

//                     <div
//                         key={user._id}
//                         className="border-b py-4 flex justify-between"
//                     >

//                         <div>
//                             <p className="font-bold">
//                                 {user.name}
//                             </p>

//                             <p className="text-gray-600">
//                                 {user.email}
//                             </p>

//                             <p>
//                                 Role: {user.role}
//                             </p>
//                         </div>

//                         <button
//                             className="bg-red-400 text-white px-4 py-2 rounded h-fit"
//                         >
//                             Delete
//                         </button>

//                     </div>

//                 ))}

//             </div>

//         </div>
//     );
// };

// export default Users;



import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Users = () => {

    const [users, setUsers] = useState([]);


    const getUsers = async () => {

        try {

            const token = Cookies.get("token");

            const response = await axios.get(
                "https://https-github-com-yourusername-restaurant.onrender.com/api/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setUsers(response.data.data);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div
            className="min-h-screen p-10"
            style={{
                background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe, #bae6fd)"
            }}
        >

            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
                Users
            </h1>


            <div className="max-w-5xl mx-auto">

                {users.map((user) => (

                    <div
                        key={user._id}
                        className="bg-white p-5 rounded-xl shadow-lg mb-4"
                    >

                        <h2 className="text-xl font-bold text-blue-700">
                            {user.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Email: {user.email}
                        </p>

                        <p className="text-gray-600 mt-2">
                            Role: {user.role}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Users;

