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
    return <div>Something is wrong...</div>;
  }

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="meal-details">
        <div className='meal-details-info-block'>
            <div className='meal-details-info-text'>
                <h1 className='title'>{meal.strMeal}</h1>
                <p>{meal.strCategory} | {meal.strArea}</p>
                <div className='meal-details-ingridients'>
                    <ul>
                    {ingredients.map((item, index) => (
                    <li key={index}> - {item.ingredient} <strong>{item.measure}</strong></li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className='meal-details-info-img'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>  
        </div>
        <div>
          <h2>Instructions</h2>
          <p className='instructions'>{meal.strInstructions}</p>
        </div>
        {meal.strYoutube && (
          <div>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className='youtube-link'>Watch on YouTube</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetails;

