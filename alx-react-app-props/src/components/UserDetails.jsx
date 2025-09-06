import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Consume the UserContext using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '10px', backgroundColor: '#e9e9e9', borderRadius: '5px' }}>
      <h4>User Details</h4>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;