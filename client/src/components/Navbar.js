import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

return (

<nav class="navbar">
        <ul>
            <li><Link className='navLink' to='/'>HOME</Link></li>
            <li><Link className='navLink' to='/signup'>SIGN UP</Link></li>
            <li><Link className='navLink' to='/login'>LOG IN</Link></li>
            <li><Link className='navLink' to='/restaurants'>REVIEWS</Link></li>
        </ul>
    </nav>

)
}

export default Navbar


