import React from 'react';
import { Link } from 'react-router-dom';

const MealOfTheDay = ({ meal }) => (
  <div className="random-meal-block">
    <div className='random-meal-block-text'>
        <h2>Meal of the Day</h2>
        <h1 className="title"><Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link></h1>
        <p>{meal.strCategory} | {meal.strArea}</p>
    </div>
    <div className='random-meal-block-img'>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  </div>
);

export default MealOfTheDay;