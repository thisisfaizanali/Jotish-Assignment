import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_USERNAME = import.meta.env.VITE_API_USERNAME;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

let cachedEmployees = null;

export const fetchEmployees = async () => {
  if (cachedEmployees) {
    return cachedEmployees;
  }

  const response = await axios.post(
    API_URL,
    {
      username: API_USERNAME,
      password: API_PASSWORD,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  cachedEmployees = response.data;
  return response.data;
};
