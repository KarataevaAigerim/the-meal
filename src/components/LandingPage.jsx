import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MealOfTheDay from '../components/MealOfTheDay';
import Search from '../components/Search';
import axios from 'axios';

const LandingPage = () => {
  const [mealOfTheDay, setMealOfTheDay] = useState(null);

  useEffect(() => {
    const fetchMealOfTheDay = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setMealOfTheDay(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal of the day:", error);
      }
    };

    fetchMealOfTheDay();
  }, []);

  return (
    <div>
      <Navbar />
      {mealOfTheDay && <MealOfTheDay meal={mealOfTheDay} />}
      <Search />
    </div>
  );
};

export default LandingPage;

