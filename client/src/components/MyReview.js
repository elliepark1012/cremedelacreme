import React from 'react';

const MyReview = ({ review, onEdit, onDelete }) => {
  console.log(review)
  return (
    <div className='card' id="review-card" key={review.id}>
      <p className='res-name'>{review.menuitem_name}</p> 
      <p className='res-name'>{review.ratings}</p> 
      <p className='res-name'>{review.comments}</p> 
      <button onClick={() => onEdit(review)}>Edit</button>
      <button onClick={() => onDelete(review)} className='delete'>Delete</button>
    </div>
  );
};

export default MyReview;
