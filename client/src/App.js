import './App.css';
import  {Route, Routes} from 'react-router-dom'
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Restaurants />}  /> 
          <Route path='/restaurants/:id' element={<Restaurant />}  /> 
        </Routes>
    </div>
  );
}

export default App 