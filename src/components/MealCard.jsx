import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => (
    <div className="meal-block">
        <Link to={`/meal/${meal.idMeal}`} className='meal-link'>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className='meal-block-text'>
                <h3>{meal.strMeal}</h3>
                <p>{meal.strCategory} | {meal.strArea}</p>
            </div>
            
        </Link>
  </div>
);

export default MealCard;

