import { useState } from 'react';

const Search = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  const handleClear = () => {
    setUsername('');
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading || !username.trim()}
            className="search-button"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
          {username && (
            <button 
              type="button" 
              onClick={handleClear}
              className="clear-button"
              disabled={loading}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;