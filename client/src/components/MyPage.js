import { useContext, useState, useEffect } from "react";
import { AppContext } from '../context/AppContext';
import ReviewEditForm from './ReviewEditForm';
import MyReview from "./MyReview";
import UserProfile from "./UserProfile"; 

const MyPage = () => {
  const { currentUser } = useContext(AppContext);
  const [editingReview, setEditingReview] = useState(null);
  const [reviews, setReviews] = useState(currentUser.reviews);

  useEffect(() => {
    setReviews(currentUser.reviews);
  }, [currentUser]);

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

          const totalRatings = updatedReviews.reduce((acc, rev) => acc + rev.ratings, 0);
          const averageRating = totalRatings / updatedReviews.length;

          console.log('New average rating:', averageRating);
        } else {
          console.error('Failed to update the review');
        }
      })
      .catch((error) => {
        console.error('Error updating review:', error);
      });
  };

  const handleDeleteReview = (review) => {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const updatedReviews = reviews.filter((r) => r.id !== review.id);
          setReviews(updatedReviews);

          const totalRatings = updatedReviews.reduce((acc, rev) => acc + rev.ratings, 0);
          const averageRating = totalRatings / updatedReviews.length;

          console.log('New average rating:', averageRating);
        } else {
          console.error('Failed to delete the review');
        }
      })
      .catch((error) => {
        console.error('Error deleting review:', error);
      });
  };

  const handleCancelEdit = () => {
    setEditingReview(null);
  };

  return (
    <>
      <UserProfile user={currentUser} /> 
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
