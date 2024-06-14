import axios from 'axios';

const API_BASE_URL = 'www.themealdb.com/api/json/v1/1';

export const fetchMealOfTheDay = async () => {
  const response = await axios.get(`${API_BASE_URL}/random.php`);
  return response.data;
};

export const fetchMealDetails = async (idMeal) => {
  const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${idMeal}`);
  return response.data;
};

export const searchMeals = async (keyword) => {
  const response = await axios.get(`${API_BASE_URL}/search.php?s=${keyword}`);
  return response.data;
};