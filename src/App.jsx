



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdminProtected from "./components/adminprotected";

// Public pages
import Home from "./pages/public/home";
import Menu from "./pages/public/menu";
import MenuDetails from "./pages/public/menu-details";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";
import Order from "./pages/public/order";

// Auth pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLogin from "./pages/auth/admin";

// Admin pages
import Dashboard from "./pages/admin/dashboard";
import MenuItems from "./pages/admin/menu-items";
import AddMenuItem from "./pages/admin/add-menu";
import EditMenuItem from "./pages/admin/edit-menu";
import Users from "./pages/admin/users";
import Orders from "./pages/admin/orders";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* ================= PUBLIC ================= */}

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
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/order"
                    element={<Order />}
                />


                {/* ================= USER AUTH ================= */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* ================= ADMIN LOGIN ================= */}

                <Route
                    path="/admin-login"
                    element={<AdminLogin />}
                />


                {/* ================= ADMIN PROTECTED ================= */}

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
                        path="/admin/menu-items/add"
                        element={<AddMenuItem />}
                    />

                    <Route
                        path="/admin/menu-items/edit/:id"
                        element={<EditMenuItem />}
                    />

                    <Route
                        path="/admin/orders"
                        element={<Orders />}
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