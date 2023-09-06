import { Link, useNavigate } from 'react-router-dom'
import AppContext from "../context/AppContext";
import { useContext } from "react";


const Navbar = () => {
    const navigate = useNavigate();
    const {currentUser, logout} = useContext(AppContext) 

    const handleLogout = () => {
        // Call the logout function to clear the user's session.
        logout();
        // Use navigate to redirect the user to the login page.
        navigate('/login');
      };    

return (
    <nav className="navbar">
        <ul>
            <li><Link className='navLink' to='/'>HOME</Link></li>
            <li><Link className='navLink' to='/restaurants'>REVIEWS</Link></li>
            {currentUser? 
            <>
            <li><Link className='navLink' to='/mypage'>MY PAGE</Link> </li>
            <li><Link className='navLink' to='/login' onClick={handleLogout}>LOG OUT</Link> </li>
            </>:           
             <>
             <li><Link className='navLink' to='/signup'>SIGN UP</Link></li>
             <li><Link className='navLink' to='/login'>LOG IN</Link></li>
             </>
            }
        </ul>
    </nav>

)
}

export default Navbar


