function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center">John Doe</h1>
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;



