import './App.css';
import {useState} from 'react';
import  {Route, Routes} from 'react-router-dom'
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';
import AppContext from './context/AppContext';
// User Restaurant, Menu Usercontext

function App() {
  const [restaurants, setRestaurants] = useState(false)
  console.log(restaurants)
  return (
  <AppContext.Provider value={{restaurants, setRestaurants}} >  
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Restaurants />}  /> 
          <Route path='/restaurants/:id' element={<Restaurant />}  /> 
        </Routes>
    </div>
  </AppContext.Provider>  
  );
}

export default App 