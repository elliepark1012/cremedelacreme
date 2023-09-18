import React, { useState, useContext } from 'react';
import AppContext from "../context/AppContext";
import { useNavigate, Link } from 'react-router-dom';
import mainVideo from '../assets/main.mp4';

function Auth() {
    const { setCurrentUser } = useContext(AppContext);

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        bio: '', // Add a field for bio
        profile_image: null, // Add a field for profile image
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    function onSubmit(e) {
        e.preventDefault();
        const formDataWithImage = new FormData();
        formDataWithImage.append('username', formData.username);
        formDataWithImage.append('email', formData.email);
        formDataWithImage.append('password', formData.password);
        formDataWithImage.append('password_confirmation', formData.password_confirmation);
        formDataWithImage.append('bio', formData.bio); // Include bio in the form data
        formDataWithImage.append('image', formData.profile_image); // Include profile image in the form data

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
                    res.json().then(setCurrentUser);
                    navigate('/mypage');
                } else {
                    res.json().then((errorData) =>
                        setErrors(Object.entries(errorData.errors).map((e) => `${e[0]} ${e[1]}`))
                    );
                }
            });
    }

    return (
        <div className='formbox'>
            <video className='backVideo' src={mainVideo} autoPlay loop muted />
            <form onSubmit={onSubmit}>
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
                <input
                    type='file'
                    name='profile_image'
                    accept='image/*' 
                    onChange={handleChange}
                />
                <button type='submit'>Sign Up</button>
            </form>
            <br></br>
            <br></br>
            <Link className='loginlink' to='/login' replace><h2>CLICK HERE TO LOGIN</h2></Link>
        </div>
    );
}

export default Auth;