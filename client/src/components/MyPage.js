import AppContext from "../context/AppContext";
import { useContext } from "react";

const MyPage = () => {
  const { currentUser } = useContext(AppContext);

  let content;

  if (currentUser !== null) {
    const { username, bio, email, profile_image } = currentUser;

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

    content = <div>
                 {/* <img src={profile_image} alt={bio}/> */}
                <h1>USERNAME: {username}</h1>
                <h1>ABOUT: {bio}</h1>
                <h1>EMAIL: {email}</h1>
              </div>;
  } else {
    // Handle the case where 'currentUser' is null.
    content = <h1>Please Sign Up</h1>;
  }

  return  <>
  <ReviewForm menuitem={menuitem} addReview={addReview}/> 
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
</>
};

export default MyPage;

