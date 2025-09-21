// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from "react";
// import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";
// import { githubService } from "./services/githubService.js";
// import "./App.css";

// function App() {
//   const [searchResults, setSearchResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = async (username) => {
//     setLoading(true);
//     setError(null);
//     setSearchTerm(username);

//     try {
//       const results = await githubService.searchUsers(username);
//       setSearchResults(results);
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Failed to search users. Please try again."
//       );
//       setSearchResults(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUserClick = async (user) => {
//     try {
//       // Get detailed user information
//       const userDetails = await githubService.getUserDetails(user.login);
//       console.log("User details:", userDetails);

//       // You can implement a modal or navigation to user detail page here
//       // For now, we'll just log the details
//     } catch (err) {
//       console.error("Failed to fetch user details:", err);
//     }
//   };

//   return (
//     <div className="App">
//       <main className="main-content">
//         <Search onSearch={handleSearch} loading={loading} />
//         <SearchResults
//           results={searchResults}
//           loading={loading}
//           error={error}
//           onUserClick={handleUserClick}
//           searchTerm={searchTerm}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";
// import { githubService } from "./services/githubService.js";
// import "./App.css";

// function App() {
//   const [searchResults, setSearchResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = async (params) => {
//     setLoading(true);
//     setError(null);
//     setSearchTerm(JSON.stringify(params));

//     try {
//       const results = await githubService.searchUsers(params);
//       setSearchResults(results);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to search users. Please try again.");
//       setSearchResults(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUserClick = async (user) => {
//     try {
//       const userDetails = await githubService.getUserDetails(user.login);
//       console.log("User details:", userDetails);
//     } catch (err) {
//       console.error("Failed to fetch user details:", err);
//     }
//   };

//   return (
//     <div className="App">
//       <main className="main-content">
//         <Search onSearch={handleSearch} loading={loading} />
//         <SearchResults
//           results={searchResults}
//           loading={loading}
//           error={error}
//           onUserClick={handleUserClick}
//           searchTerm={searchTerm}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { githubService } from "./services/githubService.js";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUsers = async (queryParams, pageNum = 1, append = false) => {
    setLoading(true);
    try {
      const results = await githubService.searchUsers({
        ...queryParams,
        page: pageNum,
      });

      // Fetch details for each user
      // const detailedItems = await Promise.all(
      //   results.items.map(async (u) => {
      //     try {
      //       return await githubService.getUserDetails(u.login);
      //     } catch {
      //       return u;
      //     }
      //   })
      // );

      const detailedItems = await Promise.all(
        results.items.map(async (u) => {
          try {
            return await githubService.getUserDetails(u.login);
          } catch {
            console.warn("Skipping invalid login:", u.login);
            return null;
          }
        })
      );

      // filter out nulls
      setSearchResults({
        ...results,
        items: detailedItems.filter(Boolean),
      });

      setSearchResults((prev) =>
        append && prev
          ? { ...results, items: [...prev.items, ...detailedItems] }
          : { ...results, items: detailedItems }
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to search users. Please try again."
      );
      setSearchResults(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (queryParams) => {
    setParams(queryParams);
    setPage(1);
    await fetchUsers(queryParams, 1, false);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchUsers(params, nextPage, true);
  };

  const handleUserClick = async (user) => {
    console.log("User clicked:", user);
    // Optionally open modal or navigate
  };

  return (
    <div className="App">
      <main className="main-content">
        <Search onSearch={handleSearch} loading={loading} />
        <SearchResults
          results={searchResults}
          loading={loading}
          error={error}
          onUserClick={handleUserClick}
          searchTerm={params ? JSON.stringify(params) : ""}
          onLoadMore={handleLoadMore}
          canLoadMore={
            searchResults &&
            searchResults.items.length <
              Math.min(searchResults.total_count, 1000)
          }
        />
      </main>
    </div>
  );
}

export default App;
