import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchMealDetails } from '../api';

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getMealDetails = async () => {
        console.log(idMeal);
      try {
        const result = await fetchMealDetails(idMeal);
        if (result.meals && result.meals.length > 0) {
          setMeal(result.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };
    

    getMealDetails();
  }, [idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`);
    }
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1>{meal.strMeal}</h1>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '483px', height: '483px' }} />
        <div>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </div>
        {meal.strYoutube && (
          <div>
            <h2>Video</h2>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetails;

