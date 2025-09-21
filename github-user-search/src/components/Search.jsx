// import { useState } from 'react';

// const Search = ({ onSearch, loading }) => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       onSearch(username.trim());
//     }
//   };

//   const handleClear = () => {
//     setUsername('');
//   };

//   return (
//     <div className="search-container">
//       <h1>GitHub User Search</h1>
//       <form onSubmit={handleSubmit} className="search-form">
//         <div className="input-group">
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter GitHub username..."
//             className="search-input"
//             disabled={loading}
//           />
//           <button
//             type="submit"
//             disabled={loading || !username.trim()}
//             className="search-button"
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//           {username && (
//             <button
//               type="button"
//               onClick={handleClear}
//               className="clear-button"
//               disabled={loading}
//             >
//               Clear
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;
import { useState } from "react";
import { fetchUserData } from "../services/githubService.js";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError(true);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>

      <form onSubmit={handleFormSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Conditional rendering based on API call state */}
      {loading && <div className="loading-message">Loading...</div>}

      {error && (
        <div className="error-message">Looks like we cant find the user</div>
      )}

      {userData && !loading && !error && (
        <div className="user-info">
          <div className="user-avatar">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              width="100"
              height="100"
            />
          </div>
          <div className="user-details">
            <h2>{userData.name || userData.login}</h2>
            <p>@{userData.login}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
