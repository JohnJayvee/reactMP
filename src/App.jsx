// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './app/Login/Page';
import HomePage from './app/Index';
import AboutPage from './app/About/Page';
import Gallery from './app/Blogs/Index';


// import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Gallery />} />


      </Routes>
    </div>
  );
};

export default App;
