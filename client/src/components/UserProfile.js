import React from 'react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

const UserProfile = () => {
  const { currentUser } = useContext(AppContext);
  const { username, bio, email, profile_image_url } = currentUser;
  
  return (
    <div className="user-profile-card">
      <div className="user-profile">
        <h2>User Profile</h2>
        <div className="user-details">
          <div className="user-avatar">
            <img src={profile_image_url} alt={`${username}'s Avatar`} />
          </div>
          <div className="user-info">
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Bio:</strong> {bio}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;