import React from 'react';

const MenuReview = ({ review }) => {
  return (
    <div className='card' id="review-card" key={review.id}>
      <p className='res-name'>Rating: {review.ratings}</p> 
      <p className='res-name'>{review.comments}</p> 
      <p className='res-name'>by {review.user_name} <br></br><br></br>({review.user_bio})</p>
    </div>
  );
};

export default MenuReview;
