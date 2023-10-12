import React, { useState } from 'react';

const ReviewEditForm = ({ review, onSave, onCancel }) => {
  const [editedReview, setEditedReview] = useState({
    review_image: review.review_image,
    ratings: review.ratings,
    comments: review.comments,
  });

  const [errors, setErrors] = useState({
    ratings: '',
    comments: '',
    review_image: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setEditedReview({
          ...editedReview,
          [name]: sanitizedValue,
        });
        // Clear the ratings error when the input is valid
        setErrors({
          ...errors,
          ratings: '',
        });
      } else {
        // Set the ratings error when the input is invalid
        setErrors({
          ...errors,
          ratings: 'Please enter a number between 0 and 5',
        });
      }
    } else if (type === 'file') {
      const selectedImage = files[0];
      if (selectedImage) {
        setEditedReview({ ...editedReview, [name]: selectedImage });
      } else {
        setEditedReview({ ...editedReview, [name]: null });
      }
    } else {
      setEditedReview({ ...editedReview, [name]: value });
    }
  };

  const handleSubmit = () => {
    // You can add more validation here, if needed
    if (editedReview.ratings < 0 || editedReview.ratings > 5) {
      setErrors({
        ...errors,
        ratings: 'Please enter a number between 0 and 5',
      });
    } else {
      // Clear the ratings error if the input is valid
      setErrors({
        ...errors,
        ratings: '',
      });

      // Continue with saving the review
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
          onChange={handleChange}
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
