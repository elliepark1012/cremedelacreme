import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReviewForm from './ReviewForm';
import { useNavigate } from 'react-router-dom';
import MenuReview from './MenuReview';

const MenuDetail = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const { id } = useParams();
  const [menuitem, setMenuitem] = useState([]);
  console.log(menuitem.ave_ratings)
  const navigate = useNavigate();

  useEffect(() => {
    if (/^\d+$/.test(id)) {
      fetch(`/menuitems/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.error(`Menu item with id ${id} not found.`);
            return null;
          }
        })
        .then((menuitemData) => {
          if (menuitemData !== null) {
            setMenuitem(menuitemData);
          }
        })
        .catch((error) => {
          console.error('Error fetching menu item:', error);
        });
    } else {
      console.error(`Invalid menu item id: ${id}`);
    }
  }, [id]);

  const { name, img_url, price, details, ave_ratings } = menuitem;
  const reviews = menuitem.reviews;

  const addReview = (review) => {
    const updatedMenuitem = { ...menuitem };
    updatedMenuitem.reviews = [...menuitem.reviews, review];

    const totalRatings = updatedMenuitem.reviews.reduce((acc, rev) => acc + rev.ratings, 0);
    const averageRating = totalRatings / updatedMenuitem.reviews.length;
    updatedMenuitem.ave_ratings = averageRating;

    setMenuitem(updatedMenuitem);

    const newReviews = [...currentUser.reviews, review];
    const newUser = { ...currentUser, reviews: newReviews };
    setCurrentUser(newUser);

    if (updatedMenuitem.id) {
      const num = updatedMenuitem.id;
      navigate(`/menus/${num}`);
    }
  };

  return (
    <div className="one-res">
      <div className="res-detail">
        <div className="info-container">
          <div className="info-text">
            <h1>
              {name} ${price}
            </h1>
            <h2>Average Rating: {ave_ratings ? ave_ratings.toFixed(2) : '0.00'}</h2>
            <h2>{details}</h2>
          </div>
          <img className="logo-detail" src={img_url} alt={name} />
        </div>
      </div>
      {menuitem.id && <ReviewForm addReview={addReview} menuitem_id={menuitem.id} />}
      <div className="grid" id="review-grid">
        {reviews &&
          reviews.map((review) => (
            <MenuReview review={review} key={review.id} />
          ))}
      </div>
    </div>
  );
};

export default MenuDetail;
