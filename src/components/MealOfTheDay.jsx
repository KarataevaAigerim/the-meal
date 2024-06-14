import React from 'react';
// import { Link } from 'react-router-dom';

const MealOfTheDay = ({ meal }) => (
  <div>
    <h2>Meal of the Day</h2>
    <h1>{meal.strMeal}</h1>
    <p>{meal.strArea}/{meal.strCategory}</p>
    <img src={meal.strMealThumb} alt={meal.strMeal} />
  </div>
);

export default MealOfTheDay;