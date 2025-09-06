import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  // Consume the UserContext using useContext hook
  const userData = useContext(UserContext);
  
  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', borderRadius: '8px', margin: '20px 0' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Bio:</strong> {userData.bio || "No bio available"}</p>
    </div>
  );
}

export default UserProfile;