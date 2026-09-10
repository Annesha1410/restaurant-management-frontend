import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


const { id } = useParams();

const handleUpdate = async (e) => {
    e.preventDefault();

    try {

        const token = Cookies.get("token");

        await axios.put(
            `https://https-github-com-yourusername-restaurant.onrender.com/api/menu-items/${id}`,
            {
                name,
                desc,
                category,
                price,
                availability
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert("Menu item updated");

    } catch (error) {

        console.log(error);

    }
};