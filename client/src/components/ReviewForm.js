import React, { useState, useEffect } from 'react';

function ReviewForm({ addReview, menuitem }) {
  const [errors, setErrors] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    ratings: 0,
    comments: '',
    review_image: null,
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
    } else if (type === 'file') {
      const selectedImage = files[0];
      if (selectedImage) {
        setFormData({ ...formData, [name]: selectedImage });
        const imageURL = URL.createObjectURL(selectedImage);
        setImagePreview(imageURL);
      } else {
        setFormData({ ...formData, [name]: null });
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('review[ratings]', formData.ratings);
    formDataToSend.append('review[comments]', formData.comments);
    formDataToSend.append('review[menuitem_id]', formData.menuitem_id);
    formDataToSend.append('review[review_image]', formData.review_image);
  
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
            review_image: null,
          });
          addReview(data);
        }
      });
  };
  
  return (
    <div className="formbox">

      <form onSubmit={onSubmit} encType="multipart/form-data">
        <label>Rate This Menu Item</label>
        <div className='errorbox'>{errors ? errors.map(e => <div className='error'>{e}</div>) : null}</div>
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
          className="file-input"
          type="file"
          name="review_image"
          onChange={handleChange}
          accept="image/*"
        />
        {imagePreview && (
    <img src={imagePreview} alt="Preview" className="image-preview" /> )}
    <label htmlFor="review_image" className="file-label">Choose File</label>
        <button type="submit">Thank you for your honest review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
