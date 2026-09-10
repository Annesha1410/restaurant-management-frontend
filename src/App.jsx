// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AdminProtected from "./components/adminprotected";

// import Home from "./pages/public/home";
// import Menu from "./pages/public/menu";
// import MenuDetails from "./pages/public/menu-details";
// import About from "./pages/public/about";
// import Contact from "./pages/public/contact";

// import Login from "./pages/auth/login";
// import Register from "./pages/auth/register";
// import AdminLogin from "./pages/auth/admin";

// import Dashboard from "./pages/admin/dashboard";
// import MenuItems from "./pages/admin/menu-items";
// import AddMenuItem from "./pages/admin/add-menu-item";
// import EditMenuItem from "./pages/admin/edit-menu-item";
// import Users from "./pages/admin/users";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/menu" element={<Menu />} />

//         <Route path="/menu/:id" element={<MenuDetails />} />


//         {/* Protected Admin Route */}
//         <Route element={<AdminProtected />}>
//           <Route path="/admin" element={<Admin />} />
//         </Route>

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdminProtected from "./components/adminprotected";

import Home from "./pages/public/home";
import Menu from "./pages/public/menu";
import MenuDetails from "./pages/public/menu-details";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLogin from "./pages/auth/admin";

import Dashboard from "./pages/admin/dashboard";
import MenuItems from "./pages/admin/menu-items";
import AddMenuItem from "./pages/admin/add-menu-item";
import EditMenuItem from "./pages/admin/edit-menu-item";
import Users from "./pages/admin/users";


function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Public Pages */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/menu"
                    element={<Menu />}
                />

                <Route
                    path="/menu/:id"
                    element={<MenuDetails />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/admin-login"
                    element={<AdminLogin />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* Admin Pages */}

                <Route element={<AdminProtected />}>

                    <Route
                        path="/admin/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/admin/menu-items"
                        element={<MenuItems />}
                    />

                    <Route
                        path="/admin/add-menu-item"
                        element={<AddMenuItem />}
                    />

                    <Route
                        path="/admin/edit-menu-item/:id"
                        element={<EditMenuItem />}
                    />

                    <Route
                        path="/admin/users"
                        element={<Users />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;