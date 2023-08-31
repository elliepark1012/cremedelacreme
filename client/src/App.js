import './App.css';
import {useState, useEffect} from 'react';
import  {Route, Routes} from 'react-router-dom'
import RestaurantDetail from './components/RestaurantDetail';
import Restaurants from './components/Restaurants';
import AppContext from './context/AppContext';
import MenuDetail from './components/MenuDetail';
// User Restaurant, Menu Usercontext

function App() {
  const [restaurants, setRestaurants] = useState([]) 

  useEffect(() => {
    fetch('/restaurants')
    .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Network response was not ok');
        }
        })
    .then(restaurants => {
        setRestaurants(restaurants);
        })
    .catch(error => {
        console.log('Error fetching restaurants:', error);
        });
  }, [])

  return (
  <AppContext.Provider value={{restaurants, setRestaurants}} >  
    <div className="App">
        <Routes>
          <Route exact path='/restaurants' element={<Restaurants />}  /> 
          <Route exact path='/restaurants/:id' element={<RestaurantDetail  />}  />  
          <Route exact path='/menus/:id' element={<MenuDetail  />}  />
        </Routes>
    </div>
  </AppContext.Provider>  
  );
}

export default App 