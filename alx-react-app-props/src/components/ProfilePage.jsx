import UserInfo from './UserInfo';

function ProfilePage() {
  // No longer needs to receive or pass userData props
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Profile Page</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;