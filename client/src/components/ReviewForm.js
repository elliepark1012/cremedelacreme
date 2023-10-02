import React, { useState, useEffect } from 'react';

function ReviewForm({ addReview, menuitem }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    ratings: 0,
    comments: '',
    image: null
  });

  useEffect(() => {
    if (menuitem.id) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        menuitem_id: menuitem.id,
      }));
    }
  }, [menuitem.id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === 'ratings') {
      const sanitizedValue = parseInt(value, 10);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 5) {
        setFormData({
          ...formData,
          [name]: sanitizedValue,
        });
      } else {
        alert('Please put the number in between 0 to 5');
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('ratings', formData.ratings);
    formDataToSend.append('comments', formData.comments);
    formDataToSend.append('menuitem_id', formData.menuitem_id);
    formDataToSend.append('review_image', formData.review_image);

    fetch('/reviews', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Review submission failed');
        }
      })
      .then((data) => {
        // Clear the form and add the new review
        setFormData({
          ratings: 0,
          comments: '',
          review_image: null,
        });
        addReview(data);
      })
      .catch((error) => {
        console.error(error);
        setErrors(['Review submission failed']);
      });
  };

  return (
    <div className="formbox">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <label>Rate This Menuitem</label>
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
          type="file"
          name="review_image"
          onChange={handleChange}
        />

        <button type="submit">Thank you for your honest review</button>
        <div className="errorbox">
          {errors.length > 0 ? (
            errors.map((e, index) => <div className="error" key={index}>{e}</div>)
          ) : (
            <div className="error">No errors</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
