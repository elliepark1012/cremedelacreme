import React, { useState } from 'react';

function ReviewForm({ addReview, menuitem_id }) {
  const id = menuitem_id
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    ratings: 0,
    comments: '',
    menuitem_id: id, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setFormData({
          ...formData,
          [name]: sanitizedValue,
        });
      } else {
        alert('Please put the number between 0 to 5');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('menuitem_id:', formData.menuitem_id);
    const formDataToSend = new FormData();
    formDataToSend.append('review[ratings]', formData.ratings);
    formDataToSend.append('review[comments]', formData.comments);
    formDataToSend.append('review[menuitem_id]', formData.menuitem_id);

    fetch('/reviews', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([]);
          setFormData({
            ratings: 0,
            comments: '',
            menuitem_id: id,
          });
          addReview(data);
        }
      });
  };

  return (
    <div className="formbox">
      <form onSubmit={onSubmit}>
        <label>Rate This Menu Item</label>
        <div className="errorbox">
          {errors ? errors.map((e) => <div className="error">{e}</div>) : null}
        </div>
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

        <button type="submit">Thank you for your honest review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
