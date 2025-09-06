import UserDetails from './UserDetails';

function UserInfo() {
  // No longer needs to receive or pass userData props
  return (
    <div style={{ padding: '15px', backgroundColor: '#f5f5f5', margin: '10px' }}>
      <h3>User Info Section</h3>
      <UserDetails />
    </div>
  );
}

export default UserInfo;