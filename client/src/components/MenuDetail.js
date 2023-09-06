import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from "../context/AppContext";
import { useContext } from "react";
import ReviewForm from './ReviewForm';

const MenuDetail = () => {
    const { id } = useParams();
    const [menuitem, setMenuitem] = useState([])
    const {currentUser, setCurrentUser} = useContext(AppContext)

    useEffect(() => {
        // Fetch menu item data only when the component mounts
        fetch(`/menuitems/${id}`)
          .then(res => res.json())
          .then(menuitemData => {
            // Do something with the menu item data
            setMenuitem(menuitemData);
          })
          .catch(error => {
            console.error('Error fetching menu item:', error);
          });
      }, [id]); 

  const { name, img_url, price, details, ave_ratings } = menuitem;

  const reviews = menuitem.reviews

  const reviewlist = reviews && reviews.map((re) => {
    return (
      <div className='card' id="review-card" key={re.id}>
        <img className='logo' id="review_img" src={re.review_image} alt={re.comments} />
        <p className='res-name'> {re.ratings}</p> 
        <p className='res-name'> {re.comments}</p> 
        <p className='res-name'> by {re.user_name}</p>
        <p className='res-name'> ({re.user_bio})</p>  
      </div>
    )
  })

  const addReview = (review) => {
    const newMenuitems = [...currentUser.menuitems, menuitem]
    const newReviews = [...currentUser.reviews, review]
    const newUser = {...currentUser, reviews: newReviews, menuitems: newMenuitems}

    setCurrentUser(newUser)
  }


    return (
        <div className='one-res'>

        <div className='res-detail'>
             <div className='info-container'>
                 <div className='info-text'>
                     <h1>{name} ${price}</h1>
                     <h2>{ave_ratings}</h2>
                     <h2>{details}</h2>
                 </div>
                    <img className='logo-detail' src={img_url} alt={name} />
                    
             </div>
         </div>
         <ReviewForm menuitem={menuitem} addReview={addReview}/> 
         <div className="grid" id="review-grid">
             {reviewlist}
         </div>
     </div>
    )
}


export default MenuDetail

