import './App.css';
import {useState, useEffect} from 'react';
import  {Route, Routes} from 'react-router-dom'
import RestaurantDetail from './components/RestaurantDetail';
import Restaurants from './components/Restaurants';
import AppContext from './context/AppContext';
import MenuDetail from './components/MenuDetail';
import Auth from './components/Auth';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar'
// User Restaurant, Menu Usercontext

function App() {
  const [restaurants, setRestaurants] = useState([]) 
  const [currentUser, setCurrentUser] = useState([])

  const updateUser = (user) => setCurrentUser(user)
  
  useEffect(() => {
      fetch('/me')
      .then(r => {
          if (r.ok) {
          r.json().then((user) => updateUser(user))
          } 
        });
      }, [])

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
  <AppContext.Provider value={{restaurants, setRestaurants, setCurrentUser, currentUser}} >  
    <div className="App">
    <Navbar /> 
        <Routes>
          <Route exact path='/restaurants' element={<Restaurants />}  /> 
          <Route exact path='/restaurants/:id' element={<RestaurantDetail  />}  />  
          <Route exact path='/menus/:id' element={<MenuDetail  />}  />
          <Route exact path='/login' element={<Login updateUser={updateUser}  />} />
          <Route exact path='/signup' element={<Auth setCurrentUser={setCurrentUser} />} />
          <Route  path='/' element={<Home  />} />
        </Routes>
    </div>
  </AppContext.Provider>  
  );
}

export default App 