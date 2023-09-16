import React, { useState } from 'react';

const ReviewEditForm = ({ review, onSave, onCancel }) => {

  const [editedReview, setEditedReview] = useState({
    review_image: review.review_image,
    ratings: review.ratings,
    comments: review.comments,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setEditedReview({
          ...editedReview,
          [name]: sanitizedValue,
        });
      } else {
        alert('Please put the number in between 0 to 5')
      }
    } else if (name === 'review_image') {
      const sanitizedValue = value.trim();
      const defaultImageURL = 'https://www.clearbrook.org/wp-content/uploads/2019/09/Coming-Soon.jpg';
      setEditedReview({
        ...editedReview,
        [name]: sanitizedValue === '' ? defaultImageURL : sanitizedValue,
      });
    } else {
      setEditedReview({
        ...editedReview,
        [name]: value,
      });
    }
  };  

  const handleSubmit = () => {
    onSave(editedReview);
  };

  return (
    <form>
      <div>
        <label>Review Image:</label>
        <input
          type="text"
          id="review_image"
          name="review_image"
          value={editedReview.review_image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Ratings:</label>
        <input
          type="number"
          id="ratings"
          name="ratings"
          value={editedReview.ratings}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={editedReview.comments}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ReviewEditForm;