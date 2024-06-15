import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MealDetails from './components/MealDetails';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/meal/:idMeal" element={<MealDetails />} />
    </Routes>
  );
};

export default App;

