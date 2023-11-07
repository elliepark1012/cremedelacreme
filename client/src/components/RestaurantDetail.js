import  { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useContext } from "react";
import { Link } from 'react-router-dom'


const RestaurantDetail = () => {
    const { id } = useParams();
    const { restaurants } = useContext(AppContext);

    const restaurant = restaurants.find(res => res.id === parseInt(id));

    if (!restaurant) {
        return <div>Loading...</div>; 
    }

    const { name, img_url, borough, location, about, hours, res_link} = restaurant;

    const menuitems = restaurant.menuitems
    console.log(menuitems)

    const menulist = menuitems.map((menu) => {
        return (     
        <div className='card' key={menu.id}>
            <Link to={`/menus/${menu.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img className='logo' src={menu.img_url} alt={menu.name} />
                <p className='res-name'> {menu.name} </p> 
            </Link> 
        </div>
        )     
    })
    const lines = hours.split('\n');
    
    const hoursline = lines.map((line, index) => {
             return (<p key={index}>{line}</p>)
    })


    return (
    <div className='one-res'>
       <div className='res-detail'>
            <div className='info-container'>
                <div className='info-text'>
                    <h1>{name}, {borough}</h1>
                    <h2>{about}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Hours: {hoursline}</h4>
                </div>
                    <a href={res_link} target='_blank' rel='noopener noreferrer'>
                        <img className='logo-detail' src={img_url} alt={name} />
                        <h4>Click Image to go to their website</h4>
                    </a>
            </div>
        </div>
        <div className="grid">
            {menulist}
        </div>
    </div>
    );    
};

export default RestaurantDetail