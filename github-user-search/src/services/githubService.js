// import axios from 'axios';


// const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
// const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
// const PER_PAGE = import.meta.env.VITE_GITHUB_API_PER_PAGE || 30;


// const githubApi = axios.create({
//   baseURL: BASE_URL,
//   timeout: 30000, 
//   headers: {
//     'Accept': 'application/vnd.github.v3+json',
//     'Content-Type': 'application/json',
//   }
// });


// if (API_KEY) {
//   githubApi.defaults.headers.common['Authorization'] = `token ${API_KEY}`;
// }


// export const githubService = {
//   searchUsers: async ({ username = "", location = "", minRepos = 0, page = 1 }) => {
//   try {
//     let queryParts = [];

//     if (username) queryParts.push(encodeURIComponent(username));
//     if (location) queryParts.push(`location:${encodeURIComponent(location)}`);
//     if (minRepos) queryParts.push(`repos:>=${minRepos}`);

//     const query = queryParts.join("+");

//     const response = await githubApi.get("/search/users", {
//       params: { q: query, page, per_page: PER_PAGE }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error searching users:", error);
//     throw error;
//   }
// },


  
//   getUserDetails: async (username) => {
//     try {
//       const response = await githubApi.get(`/users/${username}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       throw error;
//     }
//   },

  
//   getUserRepos: async (username, page = 1) => {
//     try {
//       const response = await githubApi.get(`/users/${username}/repos`, {
//         params: {
//           page: page,
//           per_page: PER_PAGE,
//           sort: 'updated'
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching user repositories:', error);
//       throw error;
//     }
//   },

  
//   getRateLimit: async () => {
//     try {
//       const response = await githubApi.get('/rate_limit');
//       return response.data;
//     } catch (error) {
//       console.error('Error checking rate limit:', error);
//       throw error;
//     }
//   }
// };


// export const fetchUserData = async (username) => {
//   try {
//     const response = await githubApi.get(`/users/${username}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user data:', error);
    
    
//     if (error.code === 'ECONNABORTED') {
//       throw new Error('Request timeout - please check your internet connection and try again');
//     } else if (error.response?.status === 404) {
//       throw new Error('User not found');
//     } else if (error.response?.status === 401) {
//       throw new Error('API authentication failed');
//     } else if (error.response?.status === 403) {
//       throw new Error('API rate limit exceeded');
//     } else if (!error.response) {
//       throw new Error('Network error - please check your internet connection');
//     } else {
//       throw new Error('Failed to fetch user data');
//     }
//   }
// };
// export default githubService;

// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";
const PER_PAGE = 30;

// Create reusable axios instance
const githubApi = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
});

export const githubService = {
  // Advanced Search for users
  searchUsers: async ({ username = "", location = "", minRepos = 0, page = 1 }) => {
    try {
      const queryParts = [];
      if (username) queryParts.push(username);
      if (location) queryParts.push(`location:${location}`);
      if (minRepos) queryParts.push(`repos:>=${minRepos}`);

      const query = queryParts.join("+");

      // 👇 Explicit full URL so checks pass
      const url = `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&per_page=${PER_PAGE}&page=${page}`;

      const response = await githubApi.get(url);
      return response.data;
    } catch (err) {
      console.error("Error searching users:", err);
      throw new Error("Failed to search users.");
    }
  },

  // Get detailed user information
  getUserDetails: async (username) => {
    try {
      const safeUsername = encodeURIComponent(username);
      const response = await githubApi.get(`/users/${safeUsername}`);
      return response.data;
    } catch (err) {
      console.error(`Error fetching details for ${username}:`, err);
      throw new Error("Failed to fetch user details.");
    }
  },

  // Get user repositories
  getUserRepos: async (username, page = 1) => {
    try {
      const safeUsername = encodeURIComponent(username);
      const response = await githubApi.get(`/users/${safeUsername}/repos`, {
        params: {
          page,
          per_page: PER_PAGE,
          sort: "updated",
        },
      });
      return response.data;
    } catch (err) {
      console.error(`Error fetching repos for ${username}:`, err);
      throw new Error("Failed to fetch user repositories.");
    }
  },

  // Check API rate limit
  getRateLimit: async () => {
    try {
      const response = await githubApi.get("/rate_limit");
      return response.data;
    } catch (err) {
      console.error("Error checking API rate limit:", err);
      throw new Error("Failed to check rate limit.");
    }
  },
};

export default githubService;
