import './App.css';
import React, { useEffect, useContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RestaurantDetail from './components/RestaurantDetail';
import Restaurants from './components/Restaurants';
import MenuDetail from './components/MenuDetail';
import Auth from './components/Auth';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyPage from './components/MyPage';
import { AppProvider } from './context/AppContext' 
import { AppContext } from './context/AppContext' 

function App() {
  const { setRestaurants, updateUser, currentUser } = useContext(AppContext); 

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

  console.log(currentUser)

  useEffect(() => {
    fetch('/restaurants')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((restaurants) => {
        setRestaurants(restaurants);
      })
      .catch((error) => {
        console.log('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/menus/:id" element={<MenuDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Auth />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

function AppWithProvider() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}


export default AppWithProvider;