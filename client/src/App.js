  import './App.css';
  import {useState, useEffect} from 'react';
  import { Routes, Route } from 'react-router-dom';
  import RestaurantDetail from './components/RestaurantDetail';
  import Restaurants from './components/Restaurants';
  import AppContext from './context/AppContext';
  import MenuDetail from './components/MenuDetail';
  import Auth from './components/Auth';
  import Login from './components/Login';
  import Home from './components/Home';
  import Navbar from './components/Navbar';
  import MyPage from './components/MyPage';

  function App() {
    const [restaurants, setRestaurants] = useState([]) 
    const [currentUser, setCurrentUser] = useState(false) 

    useEffect(() => {
      fetch('/me')
        .then((r) => {
          if (r.ok) {
            return r.json();
          } else {
            throw new Error('Network response was not OK');
          }
        })
        .then((user) => updateUser(user))
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    }, []);

    const updateUser = (user) => setCurrentUser(user)

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
    }, [currentUser])

    return (    
      <AppContext.Provider value={{ restaurants, setRestaurants, setCurrentUser, currentUser, updateUser }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/restaurants' element={<Restaurants />} /> */
            <Route exact path='/restaurants/:id' element={<RestaurantDetail />} />
            <Route path="/menus/:id" element={<MenuDetail />} />
            <Route exact path='/login' element={<Login updateUser={updateUser} />} />
            <Route exact path='/signup' element={<Auth />} />
            <Route exact path='/mypage' element={<MyPage />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
    </AppContext.Provider>
  );
}

export default App 