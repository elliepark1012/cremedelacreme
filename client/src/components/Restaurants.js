import AppContext from "../context/AppContext";
import { useContext } from "react";
import Restaurant from "./Restaurant";
import React from 'react';
import Home from "./Home";

const Restaurants = () => {
    const {restaurants} = useContext(AppContext) 

    const grid = restaurants.map((restaurant) => {
      return (
        <div key={restaurant.id}>
            <Restaurant 
            restaurant={restaurant}
             />
        </div>
      )
    })

return (
    <>
    <Home /> 
    <h1 className="intro"><span>Click the restaurants</span></h1>
    <div className="grid">
      {grid}
    </div>
    </>
  );
};

export default Restaurants;
   







