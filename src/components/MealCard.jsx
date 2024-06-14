import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => (
  <div>
    <Link to={`/meal/${meal.id}`}>
      <img src={meal.image} alt={meal.name} />
      <p>{meal.category}</p>
    </Link>
  </div>
);

export default MealCard;