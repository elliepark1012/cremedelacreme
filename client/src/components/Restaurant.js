import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({ restaurant }) => {

  if (!restaurant) {
    return <div>Loading...</div>; 
  }

  const { img_url, id, name } = restaurant;


  return (
    <>
    <Link to={`/restaurants/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className='card'>
        <img className='logo' src={img_url} alt={name} width="50"/>
        <div className='res-name'>{name}
      </div>
    </div>
    </Link>
    </>

  )
}

export default Restaurant;
