// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import axios from 'axios';

// const MealDetails = () => {
//   const { mealId } = useParams();
//   const [meal, setMeal] = useState(null);

//   useEffect(() => {
//     const fetchMeal = async () => {
//       try {
//         const response = await axios.get(`/api/meals/${mealId}`);
//         setMeal(response.data);
//       } catch (error) {
//         console.error("Error fetching meal details:", error);
//       }
//     };

//     fetchMeal();
//   }, [mealId]);

//   if (!meal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <h1>{meal.name}</h1>
//         <p>{meal.category}</p>
//         <img src={meal.image} alt={meal.name} style={{ width: '483px', height: '483px' }} />
//         <div>
//           <h2>Ingredients</h2>
//           <ul>
//             {meal.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2>Instructions</h2>
//           <p>{meal.instructions}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MealDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealDetails = ({ idMeal }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMeal();
  }, [idMeal]);

  if (!mealDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{mealDetails.strMeal}</h1>
      <p>{mealDetails.strArea}/{mealDetails.strCategory}</p>
      <ul>
        <li>{mealDetails.strIngredient1}</li>
      </ul>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <p>{mealDetails.strInstructions}</p>
    </div>
  );
};

export default MealDetails;