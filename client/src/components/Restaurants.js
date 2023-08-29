import AppContext from "../context/AppContext";
import { useContext } from "react";
import Restaurant from "./Restaurant";
import styled from 'styled-components';


const Home = styled.div`
text-align:center;
margin-left: auto;
margin-right: auto;
max-width: 1200px;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;

> div {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
`

const Restaurants = () => {


    const {restaurants} = useContext(AppContext) 

    const grid = restaurants.map( (restaurant, index) => {
    
  
      return (
        <Restaurant 
          key={index}
          restaurant={restaurant}
        />
      )
    })

    return (
      <Home>
      <Grid>{grid}</Grid>
      </Home>
    );
  };

   export default Restaurants
   







