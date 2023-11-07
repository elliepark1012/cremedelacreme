import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import mainVideo from '../assets/main.mp4';

function Auth() {
    const { setCurrentUser } = useContext(AppContext);

    const [errors, setErrors] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        bio: '', 
        profile_image: null, 
    });
    

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
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

    function onSubmit(e) {
        e.preventDefault();
        const formDataWithImage = new FormData();
        formDataWithImage.append('user[username]', formData.username);
        formDataWithImage.append('user[email]', formData.email);
        formDataWithImage.append('user[password]', formData.password);
        formDataWithImage.append('user[password_confirmation]', formData.password_confirmation);
        formDataWithImage.append('user[bio]', formData.bio);
        formDataWithImage.append('user[profile_image]', formData.profile_image);
    
        fetch('/users', {
            method: 'POST',
            body: formDataWithImage,
        })
            .then((res) => {
                if (res.ok) {
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                        bio: '',
                        profile_image: null,
                    });
                    res.json().then((user) => {
                        setCurrentUser(user);
                        navigate('/mypage');
                    });
                } else {
                    res.json().then((errorData) => {
                        const errors = Object.values(errorData.errors).flat();
                        setErrors(errors);
                    });
                }
            });
    }
    
    
    return (
        <div className='formbox'>
            <video className='backVideo' src={mainVideo} autoPlay loop muted />
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <h5>SIGN UP WITH US</h5>
                <div className='errorbox'>{errors ? errors.map(e => <div className='error'>{e}</div>) : null}</div>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <label>Password Confirmation</label>
                <input
                    type='password'
                    name='password_confirmation'
                    value={formData.password_confirmation}
                    onChange={handleChange}
                />
                <label>Bio</label>
                <textarea
                    name='bio'
                    value={formData.bio}
                    onChange={handleChange}
                />
                <label>Profile Image</label>
                <div className="file-input-container">
                <input
                            type='file'
                            name='profile_image'
                            accept='image/*' 
                            onChange={handleChange}
                            className="file-input"
                            id="profile_image"  
                        />
                        {imagePreview && (
    <img src={imagePreview} alt="Preview" className="image-preview" />
)}  
                    <label htmlFor="profile_image" className="file-label">Choose File</label>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <br></br>
            <br></br>
            <Link className='loginlink' to='/login' replace><h2>CLICK HERE TO LOGIN</h2></Link>
        </div>
    );
}

export default Auth;