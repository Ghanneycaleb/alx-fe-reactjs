// import UserCard from './UserCard';

// const SearchResults = ({ 
//   results, 
//   loading, 
//   error, 
//   onUserClick,
//   searchTerm 
// }) => {
//   if (loading) {
//     return (
//       <div className="search-results">
//         <div className="loading">
//           <div className="loading-spinner"></div>
//           <p>Searching for users...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="search-results">
//         <div className="error">
//           <h3>Oops! Something went wrong</h3>
//           <p>{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="retry-button"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!results) {
//     return (
//       <div className="search-results">
//         <div className="no-search">
//           <h3> Search for GitHub Users</h3>
//           <p>Enter a username above to find GitHub users and explore their profiles.</p>
//         </div>
//       </div>
//     );
//   }

//   if (results.total_count === 0) {
//     return (
//       <div className="search-results">
//         <div className="no-results">
//           <h3>No users found</h3>
//           <p>No users found for "<strong>{searchTerm}</strong>". Try a different search term.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="search-results">
//       <div className="results-header">
//         <h3>
//           Found {results.total_count.toLocaleString()} users 
//           {searchTerm && ` for "${searchTerm}"`}
//         </h3>
//         <p className="results-info">
//           Showing {results.items.length} of {Math.min(results.total_count, 1000)} results
//         </p>
//       </div>
      
//       <div className="results-grid">
//         {results.items.map((user) => (
//           <UserCard 
//             key={user.id}
//             user={user}
//             onClick={onUserClick}
//           />
//         ))}
//       </div>
      
//       {results.total_count > results.items.length && (
//         <div className="load-more">
//           <p>Showing first {results.items.length} results</p>
//           <small>Use more specific search terms to narrow results</small>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

// import UserCard from "./UserCard";

// const SearchResults = ({
//   results,
//   loading,
//   error,
//   onUserClick,
//   searchTerm,
//   onLoadMore,
//   canLoadMore,
// }) => {
//   if (loading) {
//     return (
//       <div className="search-results">
//         <div className="loading">
//           <div className="loading-spinner"></div>
//           <p>Searching for users...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="search-results">
//         <div className="error">
//           <h3>Oops! Something went wrong</h3>
//           <p>{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="retry-button"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!results) {
//     return (
//       <div className="search-results">
//         <div className="no-search">
//           <h3>Search for GitHub Users</h3>
//           <p>
//             Enter a username, location, or repo count above to find GitHub
//             users.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (results.total_count === 0) {
//     return (
//       <div className="search-results">
//         <div className="no-results">
//           <h3>No users found</h3>
//           <p>
//             No users found for "<strong>{searchTerm}</strong>". Try a different
//             search term.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="search-results">
//       <div className="results-header">
//         <h3>
//           Found {results.total_count.toLocaleString()} users
//           {searchTerm && ` for "${searchTerm}"`}
//         </h3>
//         <p className="results-info">
//           Showing {results.items.length} of{" "}
//           {Math.min(results.total_count, 1000)} results
//         </p>
//       </div>

//       <div className="results-list">
//         {results.items.map((user) => (
//           <UserCard key={user.id} user={user} onClick={onUserClick} />
//         ))}
//       </div>

//       {canLoadMore && (
//         <button onClick={onLoadMore} className="load-more">
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import UserCard from "./UserCard";

const SearchResults = ({
  results,
  loading,
  error,
  onUserClick,
  searchTerm,
  onLoadMore,
  canLoadMore,
}) => {
  if (loading && !results) {
    return (
      <div className="search-results">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Searching for users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-results">
        <div className="error">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="search-results">
        <div className="no-search">
          <h3>Search for GitHub Users</h3>
          <p>Enter username, location, or repo count to explore profiles.</p>
        </div>
      </div>
    );
  }

  if (results.total_count === 0) {
    return (
      <div className="search-results">
        <div className="no-results">
          <h3>No users found</h3>
          <p>
            No users found for "<strong>{searchTerm}</strong>"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h3>
          Found {results.total_count.toLocaleString()} users{" "}
          {searchTerm && `for "${searchTerm}"`}
        </h3>
        <p className="results-info">
          Showing {results.items.length} of {Math.min(results.total_count, 1000)}
        </p>
      </div>

      <div className="results-list">
        {results.items.map((user) => (
          <UserCard key={user.id} user={user} onClick={onUserClick} />
        ))}
      </div>

      {canLoadMore && (
        <button onClick={onLoadMore} className="load-more">
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default SearchResults;
