import React from 'react';

const MenuReview = ({ review }) => {

  
  return (
    
    <div className='card' id="review-card" key={review.id}>
      <img className='logo' id="review_img" src={review.review_image} alt={review.review_image} />
      <p className='res-name'> {review.ratings}</p> 
      <p className='res-name'> {review.comments}</p> 
      <p className='res-name'> by {review.user_name}</p>
      <p className='res-name'> ({review.user_bio})</p>  
    </div>
  );
};

export default MenuReview;
