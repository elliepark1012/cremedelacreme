import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import mainVideo from '../assets/main.mp4'

function Login({updateUser}) {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState ([])
    const [login, setLogin] = useState('')

    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          })
            .then(res => {
              if (res.ok) {
                return res.json().then(user => {
                  updateUser(user);
                  navigate('/restaurants');
                });
              } else {
                return res.json().then(error => {
                  console.log(error);
                });
              }
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
        }
 
    return (
        <div>
        <video className='backVideo' src= {mainVideo} autoPlay loop muted />
        <form className="loginbox" onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button type='submit' onClick={() => setLogin(login)}>Welcome BACK</button> 
      </form>
      <div className='errorbox'>{errors?errors.map(e=> <div className='error'>{e}</div>):null}</div>
        </div>
    )
}

export default Login