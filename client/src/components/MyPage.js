import { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import ReviewEditForm from './ReviewEditForm';
import MyReview from "./MyReview";

const MyPage = () => {
  const { currentUser } = useContext(AppContext);
  const [editingReview, setEditingReview] = useState(null);
  const [reviews, setReviews] = useState(currentUser.reviews);

  useEffect(() => {
    setReviews(currentUser.reviews);
  }, [currentUser]);

  const { username, bio, email, profile_image } = currentUser;

  let content = <ul>{username} {bio} {email} {profile_image}</ul>

  const handleEditReview = (review) => {
    setEditingReview(review);
  };

  const handleSaveEditedReview = (editedReview) => {
    fetch(`/reviews/${editingReview.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedReview),
    })
      .then((response) => {
        if (response.ok) {
          const updatedReviews = reviews.map((r) =>
            r.id === editingReview.id ? editedReview : r
          );
          setReviews(updatedReviews);
          setEditingReview(null);
        } else {
          console.error('Failed to update the review');
        }
      })
      .catch((error) => {
        console.error('Error updating review:', error);
      });
  };

  const handleCancelEdit = () => {
    setEditingReview(null);
  };

  const handleDeleteReview = (review) => {
    // Perform deletion logic here (e.g., send a request to the server)
    // After successful deletion, update the UI to remove the review
    // from the reviews list
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Review deleted successfully, update the UI
          // Remove the review from your reviews state
          const updatedReviews = reviews.filter((r) => r.id !== review.id);
          setReviews(updatedReviews);
        } else {
          // Handle the case where deletion fails
          console.error('Failed to delete the review');
        }
      })
      .catch((error) => {
        console.error('Error deleting review:', error);
      });
  };

  // Define the 'content' variable here if needed...

  return (
    <>
    {content}
    <div className="grid" id="review-grid">
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            {editingReview && editingReview.id === review.id ? (
              <ReviewEditForm
                review={editingReview}
                onSave={handleSaveEditedReview}
                onCancel={handleCancelEdit}
              />
            ) : (
              <MyReview
                review={review}
                onEdit={handleEditReview}
                onDelete={handleDeleteReview}
              />
            )}
          </div>
        ))}

    </div>
    </>
  );
};

export default MyPage;





