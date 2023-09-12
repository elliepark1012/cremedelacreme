import React, { useState } from 'react';
import ReviewEditForm from './ReviewEditForm'; // Create this component to render the edit form

const MenuDetail = () => {
  // ... other code ...

  // State to track the review being edited
  const [editingReview, setEditingReview] = useState(null);

  // Function to handle editing a review
  const handleEditReview = (review) => {
    // Set the review to be edited in the state
    setEditingReview(review);
  };

  // Function to save the edited review
  const handleSaveEditedReview = (editedReview) => {
    // Send a PATCH request to update the review
    fetch(`/reviews/${editingReview.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedReview),
    })
      .then((response) => {
        if (response.ok) {
          // Review updated successfully, update the UI
          // Replace the old review with the edited review in your reviews state
          const updatedReviews = reviews.map((r) =>
            r.id === editingReview.id ? editedReview : r
          );
          setReviews(updatedReviews);

          // Clear the editing state
          setEditingReview(null);
        } else {
          // Handle the case where the update fails
          console.error('Failed to update the review');
        }
      })
      .catch((error) => {
        console.error('Error updating review:', error);
      });
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingReview(null);
  };

  return (
    <div className='one-res'>
      {/* ... other code ... */}
      <div className="grid" id="review-grid">
        {reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              {editingReview && editingReview.id === review.id ? (
                // Render the edit form when editingReview is set
                <ReviewEditForm
                  review={editingReview}
                  onSave={handleSaveEditedReview}
                  onCancel={handleCancelEdit}
                />
              ) : (
                // Render the review with edit and delete buttons
                <Review
                  review={review}
                  onEdit={handleEditReview}
                  onDelete={handleDeleteReview}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuDetail;