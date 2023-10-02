import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useContext } from "react";


const Navbar = () => {
    const navigate = useNavigate();
    const {currentUser, updateUser} = useContext(AppContext) 

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
          if (r.ok) {
            updateUser(false); 
            alert("See you again (ʘ‿ʘ)ノ✿")
            navigate(`/`)
          }
        })
      }

return (
    <nav className="navbar">
        <ul>
            <li><Link className='navLink' to='/'>HOME</Link></li>
            {currentUser? 
            <>
            <li><Link className='navLink' to='/restaurants'>REVIEWS</Link></li>
            <li><Link className='navLink' to='/mypage'>MY PAGE</Link> </li>
            <li><Link className='navLink' to='/login' onClick={handleLogoutClick}>LOG OUT</Link> </li>
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


