
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchStrategies = async (view, date) => {
  try {
    const response = await axios.get(`${API_URL}/api/strategies/${view}/${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching strategies:', error);
    return [];
  }
};
