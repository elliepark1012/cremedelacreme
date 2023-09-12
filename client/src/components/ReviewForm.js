import React, { useState, useEffect } from 'react';


function ReviewForm({ addReview, menuitem }) {
  const [errors, setErrors] = useState([]);


  const [formData, setFormData] = useState({
    review_image: '',
    ratings: 0,
    comments: '',
    menuitem_id: undefined,
  });

  useEffect(() => {
    if (menuitem.id !== undefined) {
      // Use a callback function to set the state based on the previous state
      setFormData((prevFormData) => ({
        ...prevFormData,
        menuitem_id: menuitem.id,
      }));
    }
  }, [menuitem.id]); // Only include menuitem.id in the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;

    const sanitizedValue = name === 'ratings' ? parseInt(value, 10) : value;

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    
    // Check if menuitem.id is defined and truthy
    if (menuitem.id) {
      fetch('/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      .then((res) => {
        if (res.ok) {
          res.json().then(addReview);
        } else {
          res.json().then((errorData) =>
            setErrors(
              Object.entries(errorData.errors).map((e) => `${e[0]} ${e[1]}`)
            )
          );
        }
      });
    } else {
      // Handle the case where menuitem.id is not available or invalid
      console.error('Invalid menuitem.id:', menuitem.id);
    }
  }

  return (
    <div className="formbox">
      <form onSubmit={onSubmit}>
        <label>Rate this menu</label>
        <input
          type="number"
          name="ratings"
          value={formData.ratings}
          onChange={handleChange}
        />

        <label>Comments</label>
        <input
          className="nameinput"
          type="text"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />

        <label>Photos</label>
        <input
          className="nameinput"
          type="text"
          name="review_image"
          value={formData.review_image}
          onChange={handleChange}
        />

        <button type="submit">Thank you for your honest review</button>
        <div className="errorbox">
          {errors ? errors.map((e) => <div className="error">{e}</div>) : null}
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;