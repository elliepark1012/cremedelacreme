import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import ReviewEditForm from './ReviewEditForm';
import MyReview from "./MyReview";
import UserProfile from "./UserProfile"; 

const MyPage = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [editingReview, setEditingReview] = useState(null);

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
          const updatedReviews = currentUser.reviews.map((r) =>
            r.id === editingReview.id ? editedReview : r
          );
          setCurrentUser({ ...currentUser, reviews: updatedReviews });
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
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const updatedReviews = currentUser.reviews.filter((r) => r.id !== review.id);
          setCurrentUser({ ...currentUser, reviews: updatedReviews });
        } else {
          console.error('Failed to delete the review');
        }
      })
      .catch((error) => {
        console.error('Error deleting review:', error);
      });
  };

  if (!currentUser) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <UserProfile user={currentUser} /> 
      <div className="grid" id="review-grid">
        {currentUser.reviews &&
          currentUser.reviews.map((review) => (
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
