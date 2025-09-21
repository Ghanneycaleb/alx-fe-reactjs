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
// import { useState } from "react";
// import { fetchUserData } from "../services/githubService.js";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleInputChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!username.trim()) return;

//     setLoading(true);
//     setError(false);
//     setUserData(null);

//     try {
//       const data = await fetchUserData(username);
//       setUserData(data);
//     } catch {
//       setError(true);
//       setUserData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h1>GitHub User Search</h1>

//       <form onSubmit={handleFormSubmit} className="search-form">
//         <input
//           type="text"
//           value={username}
//           onChange={handleInputChange}
//           placeholder="Enter GitHub username"
//           className="search-input"
//         />
//         <button type="submit" className="search-button">
//           Search
//         </button>
//       </form>

//       {/* Conditional rendering based on API call state */}
//       {loading && <div className="loading-message">Loading...</div>}

//       {error && (
//         <div className="error-message">Looks like we cant find the user</div>
//       )}

//       {userData && !loading && !error && (
//         <div className="user-info">
//           <div className="user-avatar">
//             <img
//               src={userData.avatar_url}
//               alt={`${userData.login}'s avatar`}
//               width="100"
//               height="100"
//             />
//           </div>
//           <div className="user-details">
//             <h2>{userData.name || userData.login}</h2>
//             <p>@{userData.login}</p>
//             <a
//               href={userData.html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="profile-link"
//             >
//               View GitHub Profile
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
import { useState } from "react";
import { githubService } from "../services/githubService.js";

const Search = () => {
  const [form, setForm] = useState({ username: "", location: "", minRepos: "" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await githubService.searchUsers({
        username: form.username,
        location: form.location,
        minRepos: form.minRepos ? parseInt(form.minRepos, 10) : 0,
      });
      setResults(data.items);
    } catch (err) {
      console.error("Search failed:", err);   //  log error for debugging
      setError("Failed to fetch users.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>GitHub Advanced User Search</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="search-input"
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="search-input"
        />
        <input
          type="number"
          name="minRepos"
          value={form.minRepos}
          onChange={handleChange}
          placeholder="Min Repos"
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="results-list">
        {results.map((user) => (
          <div key={user.id} className="user-info">
            <img src={user.avatar_url} alt={user.login} className="avatar-image" />
            <div>
              <h2>{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
