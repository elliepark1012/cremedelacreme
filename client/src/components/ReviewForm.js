import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ReviewForm({ addReview, menuitem }) {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate() 

    console.log('menuitem.id:', menuitem.id);

    const [formData, setFormData] = useState({
      review_image: '',
      ratings: 0, 
      comments: '',
      menuitem_id: undefined,
    });
    
    console.log('formData.menuitem_id:', formData.menuitem_id);

    useEffect(() => {
        // When menuitem.id becomes available, update formData.menuitem_id
        if (menuitem.id !== undefined) {
          setFormData({
            ...formData,
            menuitem_id: menuitem.id,
          });
        }
      }, [menuitem]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        const sanitizedValue = name === 'ratings' ? parseInt(value, 10) : value;
      
        setFormData({
          ...formData,
          [name]: sanitizedValue,
        });
      };
      

    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(addReview)
                    navigate('/mypage');
                    
                }
                else {
                    res.json().then((errorData) => setErrors(Object.entries(errorData.errors).map(e=> `${e[0]} ${e[1]}`)));
                }
            })
    }

    return (
        <div className='formbox'>

            <form onSubmit={onSubmit}>

                <label>Rate this menu</label>
                <input type='number' name='ratings' value={formData.ratings} onChange={handleChange} />

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

                <button type='submit'>Thank you for your honest review</button>
                <div className='errorbox'>{errors?errors.map(e=> <div className='error'>{e}</div>):null}</div>
            </form>
        </div>
    )
}

export default ReviewForm