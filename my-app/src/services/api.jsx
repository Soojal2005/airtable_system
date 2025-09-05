import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authenticate = (accessToken) => {
  return api.post('/auth', { accessToken });
};

export const createForm = (formData) => {
  return api.post('/forms', formData);
};

export const getForms = () => {
  return api.get('/forms');
};

export const getForm = (id) => {
  return api.get(`/forms/${id}`);
};

export const submitResponse = (formId, data) => {
  return api.post(`/responses/${formId}`, data);
};

// Export the api instance if needed elsewhere
export default api;