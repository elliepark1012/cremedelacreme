import React from 'react';

const MyReview = ({ review, onEdit, onDelete }) => {
  return (
    <div className='card' id="review-card" key={review.id}>
      <img className='logo' id="review_img" src={review.review_image} alt={review.review_image} />
      <p className='res-name'>{review.ratings}</p> 
      <p className='res-name'>{review.comments}</p> 
      <p className='res-name'>by {review.user_name}</p>
      <p className='res-name'>({review.user_bio})</p>
      {/* Edit button */}
      <button onClick={() => onEdit(review)}>Edit</button>
      {/* Delete button */}
      <button onClick={() => onDelete(review)}>Delete</button>
    </div>
  );
};

export default MyReview;