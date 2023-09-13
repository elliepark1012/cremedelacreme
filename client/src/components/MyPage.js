// import AppContext from "../context/AppContext";
// import { useContext, useState } from "react";
// import ReviewEditForm from './ReviewEditForm';
// import MyReview from "./MyReview";

// const MyPage = () => {
//   const { currentUser } = useContext(AppContext);
//   const [editingReview, setEditingReview] = useState(null);
//   const [reviews, setReviews] = useState(currentUser.reviews);

//   useEffect(() => {
//     // Update the reviews state whenever currentUser changes
//     setReviews(currentUser.reviews);
//   }, [currentUser]);

//     const { username, bio, email, profile_image } = currentUser;

//     const handleEditReview = (review) => {
//       setEditingReview(review);
//     };
  
//     const handleSaveEditedReview = (editedReview) => {
//       fetch(`/reviews/${editingReview.id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedReview),
//       })
//         .then((response) => {
//           if (response.ok) {
//             const updatedReviews = reviews.map((r) =>
//               r.id === editingReview.id ? editedReview : r
//             );
//             setReviews(updatedReviews);
//             setEditingReview(null);
//           } else {
//             console.error('Failed to update the review');
//           }
//         })
//         .catch((error) => {
//           console.error('Error updating review:', error);
//         });
//     };
  
//     const handleCancelEdit = () => {
//       setEditingReview(null);
//     };
  
//     const handleDeleteReview = (review) => {
//       // Perform deletion logic here (e.g., send a request to the server)
//       // After successful deletion, update the UI to remove the review
//       // from the reviews list
//       fetch(`/reviews/${review.id}`, {
//         method: 'DELETE',
//       })
//         .then((response) => {
//           if (response.ok) {
//             // Review deleted successfully, update the UI
//             // Remove the review from your reviews state
//             const updatedReviews = reviews.filter((r) => r.id !== review.id);
//             setReviews(updatedReviews);
//           } else {
//             // Handle the case where deletion fails
//             console.error('Failed to delete the review');
//           }
//         })
//         .catch((error) => {
//           console.error('Error deleting review:', error);
//         });
//     };

//     // content = <div>
//     //              {/* <img src={profile_image} alt={bio}/> */}
//     //             <h1>USERNAME: {username}</h1>
//     //             <h1>ABOUT: {bio}</h1>
//     //             <h1>EMAIL: {email}</h1>
//     //           </div>;
//   }

//   return (
//     <div className="grid" id="review-grid">
//       {reviews &&
//         reviews.map((review) => (
//           <div key={review.id}>
//             {editingReview && editingReview.id === review.id ? (
//               <ReviewEditForm
//                 review={editingReview}
//                 onSave={handleSaveEditedReview}
//                 onCancel={handleCancelEdit}
//               />
//             ) : (
//               <MyReview
//                 review={review}
//                 onEdit={handleEditReview}
//                 onDelete={handleDeleteReview}
//               />
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default MyPage;


import { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import ReviewEditForm from './ReviewEditForm';
import MyReview from "./MyReview";

const MyPage = () => {
  const { currentUser } = useContext(AppContext);
  const [editingReview, setEditingReview] = useState(null);
  const [reviews, setReviews] = useState(currentUser.reviews);

  useEffect(() => {
    // Update the reviews state whenever currentUser changes
    setReviews(currentUser.reviews);
  }, [currentUser]);

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

  // Define the 'content' variable here if needed...

  return (
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
      {/* Render the 'content' variable here if needed... */}
    </div>
  );
};

export default MyPage;





