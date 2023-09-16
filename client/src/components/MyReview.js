import React from 'react';

const MyReview = ({ review, onEdit, onDelete }) => {
  return (
    <div className='card' id="review-card" key={review.id}>
      <img className='logo' id="review_img" src={review.review_image} alt={review.review_image} />
      <p className='res-name'>{review.ratings}</p> 
      <p className='res-name'>{review.comments}</p> 
      <button onClick={() => onEdit(review)}>Edit</button>
      <button onClick={() => onDelete(review)} className='delete'>Delete</button>
    </div>
  );
};

export default MyReview;