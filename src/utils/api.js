import axios from 'axios';
import { API_ENDPOINTS } from './constants.js';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const submitContactForm = async (contactData) => {
  try {
    const response = await apiClient.post('/contact', contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { 
      success: false, 
      message: 'Failed to send message' 
    };
  }
};

export default apiClient;
