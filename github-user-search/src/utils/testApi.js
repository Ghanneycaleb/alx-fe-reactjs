import { githubService } from '../services/githubApi.js';

// Test function to verify API setup
export const testGitHubApi = async () => {
  try {
    console.log('Testing GitHub API configuration...');
    
    // Test rate limit endpoint
    const rateLimit = await githubService.getRateLimit();
    console.log(' API Connection successful!');
    console.log(`Rate limit: ${rateLimit.rate.remaining}/${rateLimit.rate.limit} remaining`);
    
    // Test user search
    const searchResults = await githubService.searchUsers('octocat');
    console.log(' User search working!');
    console.log(`Found ${searchResults.total_count} users for 'octocat'`);
    
    return true;
  } catch (error) {
    console.error(' API test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    return false;
  }
};

// Environment variables check
export const checkEnvConfig = () => {
  console.log('Environment Variables Check:');
  console.log('VITE_GITHUB_API_URL:', import.meta.env.VITE_GITHUB_API_URL || 'Using default');
  console.log('VITE_GITHUB_API_KEY:', import.meta.env.VITE_GITHUB_API_KEY ? ' Set' : ' Not set (rate limited)');
  console.log('VITE_GITHUB_API_PER_PAGE:', import.meta.env.VITE_GITHUB_API_PER_PAGE || 'Using default (30)');
};