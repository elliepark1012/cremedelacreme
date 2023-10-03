import React, { useState } from 'react';

const ReviewEditForm = ({ review, onSave, onCancel }) => {
  const [editedReview, setEditedReview] = useState({
    review_image: review.review_image_url, 
    ratings: review.ratings,
    comments: review.comments,
  });

  const [errors, setErrors] = useState({
    ratings: '',
    review_image: '', 
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newErrors = { ...errors };

    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setEditedReview({
          ...editedReview,
          [name]: sanitizedValue,
        });
        newErrors.ratings = ''; 
      } else {
        newErrors.ratings = 'Please enter a number between 0 and 5';
      }
    } else if (name === 'review_image') {
      if (type === 'file') {
        const file = files[0];
        if (file) {
          newErrors.review_image = '';
        } else {
          newErrors.review_image = 'Please select a valid image file';
        }
      }
    } else {
      setEditedReview({
        ...editedReview,
        [name]: value,
      });
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    if (Object.values(errors).every((error) => !error)) {
      onSave(editedReview);
    }
  };

  return (
    <form>
      <div>
        <label>Review Image:</label>
        <input
          type="file" 
          id="review_image"
          name="review_image"
          onChange={handleInputChange}
        />
        <span className="error">{errors.review_image}</span> 
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
        <span className="error">{errors.ratings}</span> 
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