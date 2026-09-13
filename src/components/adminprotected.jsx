
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AdminProtected = () => {

    const token = Cookies.get("token");
    const role = Cookies.get("role");

    console.log("Protected Token:", token);
    console.log("Protected Role:", role);

    if (!token || role !== "admin") {
        return <Navigate to="/admin-login" />;
    }

    return <Outlet />;
};

export default AdminProtected;


