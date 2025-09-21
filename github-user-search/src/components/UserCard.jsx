const UserCard = ({ user, onClick }) => {
  if (!user) return null;

  const {
    login,
    avatar_url,
    html_url,
    name,
    bio,
    location,
    public_repos,
    followers,
    following,
    created_at
  } = user;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="user-card" onClick={() => onClick && onClick(user)}>
      <div className="user-avatar">
        <img 
          src={avatar_url} 
          alt={`${login}'s avatar`}
          className="avatar-image"
        />
      </div>
      
      <div className="user-info">
        <div className="user-header">
          <h2 className="user-name">{name || login}</h2>
          <p className="user-username">@{login}</p>
        </div>
        
        {bio && <p className="user-bio">{bio}</p>}
        
        {location && (
          <div className="user-location">
            <span className="location-icon">📍</span>
            <span>{location}</span>
          </div>
        )}
        
        <div className="user-stats">
          <div className="stat">
            <span className="stat-number">{public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
          <div className="stat">
            <span className="stat-number">{followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
        
        <div className="user-meta">
          <p className="join-date">
            Joined {formatDate(created_at)}
          </p>
          <a 
            href={html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;