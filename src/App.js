import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import People from './Components/People';
import Planets from './Components/Planets';

const App = () => {
  const [category, setCategory] = useState('');
  const [id, setID] = useState('');

  const handleFormSubmit = (selectedCategory, selectedID) => {
    setCategory(selectedCategory);
    setID(selectedID);
  };

  return (
    <BrowserRouter>
      <h1 style={{ textAlign: 'center' }}>Luke API Walker</h1>
      <Home
        category={category}
        id={id}
        onFormSubmit={handleFormSubmit}
      />
      <Routes>
        <Route
          path="/"
          element={<Home category={category} id={id} />}
        />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
