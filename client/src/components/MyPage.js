import { useContext, useState, useEffect } from "react";
import { AppContext } from '../context/AppContext';
import ReviewEditForm from './ReviewEditForm';
import MyReview from "./MyReview";
import UserProfile from "./UserProfile"; 
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [editingReview, setEditingReview] = useState(null); 
  const [reviews, setReviews] = useState(currentUser.reviews);

  const navigate = useNavigate();


  useEffect(() => {
    setReviews(currentUser.reviews);
  }, [currentUser]);

  const handleEditReview = (review) => {
    setEditingReview(review);
  };

  const handleSaveEditedReview = (editedReview) => {
    if (editingReview) {
      const id = editingReview.id;
  
      fetch(`/reviews/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          review_image: editedReview.review_image,
          ratings: editedReview.ratings,
          comments: editedReview.comments,
        }),
      })
        .then((response) => {
          if (response.ok) {
            const updatedReviews = reviews.map((r) =>
              r.id === id ? editedReview : r
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
    }
    navigate('/mypage');
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
                  review={review} 
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
