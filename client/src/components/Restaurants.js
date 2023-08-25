import AppContext from "../context/AppContext"
import { useContext } from "react"
const Restaurants = () => {
    const {restaurants} = useContext(AppContext) 
    console.log(restaurants)
    return (
    
     <div> Restaurants all 
     </div>
   )} 
   
   export default Restaurants
   