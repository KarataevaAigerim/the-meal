
import React, { useState } from 'react';
import { searchMeals } from '../api.jsx';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await searchMeals(query);
      setSearchResults(result.meals);
    } catch (error) {
      console.error("Error searching for meals:", error);
    }
  };

  return (
    <div>
      <h2>Find your Meal</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for meals"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults && searchResults.map((meal) => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

