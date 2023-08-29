import  { useParams } from 'react-router-dom'
import AppContext from "../context/AppContext";
import { useContext } from "react";  

const RestaurantDetail = () => {

    const {restaurants} = useContext(AppContext) 
    const { id } = useParams();

    const restaurant = restaurants.find(res => res.id === parseInt(id));
    const {name, img_url, borough, location, about, hours} = restaurant
    return (
        <div>
            <h1>{name}</h1>
            <h1>{img_url}</h1>
            <h1>{borough}</h1>
            <h1>{location}</h1>
            <h1>{about}</h1>
            <h1>{hours}</h1>

            11
        </div>
    )
}


export default RestaurantDetail