import React from 'react';

const MyReview = ({ review }) => {
  return (
    <div className='card' id="review-card" key={review.id}>
      <img className='logo' id="review_img" src={review.review_image} alt={review.comments} />
      <p className='res-name'> {review.ratings}</p> 
      <p className='res-name'> {review.comments}</p> 
      <p className='res-name'> by {review.user_name}</p>
      <p className='res-name'> ({review.user_bio})</p>  
    </div>
  );
};

export default MyReview;
