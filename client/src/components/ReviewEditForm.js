import React, { useState } from 'react';

const ReviewEditForm = ({ review, onSave, onCancel }) => {
  const [editedReview, setEditedReview] = useState({
    ratings: review.ratings,
    comments: review.comments,
  });

  const [errors, setErrors] = useState({
    ratings: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setEditedReview({
          ...editedReview,
          [name]: sanitizedValue,
        });

        setErrors({
          ...errors,
          ratings: '',
        });
      } else {

        setErrors({
          ...errors,
          ratings: 'Please enter a number between 0 and 5',
        });
      }
    } else {
      setEditedReview({ ...editedReview, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (editedReview.ratings < 0 || editedReview.ratings > 5) {
      setErrors({
        ...errors,
        ratings: 'Please enter a number between 0 and 5',
      });
    } else {
      setErrors({
        ...errors,
        ratings: '',
      });

      onSave(editedReview);
    }
  };

  return (
    <form>
      <div>
        <label>Ratings:</label>
        <input
          type="number"
          id="ratings"
          name="ratings"
          value={editedReview.ratings}
          onChange={handleChange}
        />
        <span className="error">{errors.ratings}</span>
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={editedReview.comments}
          onChange={handleChange}
        />
        <span className="error">{errors.comments}</span>
      </div>
      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ReviewEditForm;
