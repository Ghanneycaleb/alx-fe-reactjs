import axios from 'axios';

// GitHub API base configuration
const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const PER_PAGE = import.meta.env.VITE_GITHUB_API_PER_PAGE || 30;

// In your githubApi.js file, update the axios instance creation:
const githubApi = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // Increase timeout to 30 seconds
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  }
});

// Add authorization header if API key is provided
if (API_KEY) {
  githubApi.defaults.headers.common['Authorization'] = `token ${API_KEY}`;
}

// API service functions
export const githubService = {
  // Search for users
  searchUsers: async (username, page = 1) => {
    try {
      const response = await githubApi.get('/search/users', {
        params: {
          q: username,
          page: page,
          per_page: PER_PAGE
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching users:', error);
      throw error;
    }
  },

  // Get detailed user information
  getUserDetails: async (username) => {
    try {
      const response = await githubApi.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  },

  // Get user repositories
  getUserRepos: async (username, page = 1) => {
    try {
      const response = await githubApi.get(`/users/${username}/repos`, {
        params: {
          page: page,
          per_page: PER_PAGE,
          sort: 'updated'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw error;
    }
  },

  // Check API rate limit
  getRateLimit: async () => {
    try {
      const response = await githubApi.get('/rate_limit');
      return response.data;
    } catch (error) {
      console.error('Error checking rate limit:', error);
      throw error;
    }
  }
};

// Add the required fetchUserData function for the task
// Update your fetchUserData function with better error handling
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // Handle specific error types
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout - please check your internet connection and try again');
    } else if (error.response?.status === 404) {
      throw new Error('User not found');
    } else if (error.response?.status === 401) {
      throw new Error('API authentication failed');
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded');
    } else if (!error.response) {
      throw new Error('Network error - please check your internet connection');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};
export default githubService;