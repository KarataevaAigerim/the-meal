import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => (
  <div>
    <Link to={`/meal/${meal.idMeal}`}>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strArea}/{meal.strCategory}</p>
    </Link>
  </div>
);

export default MealCard;

