// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center px-4">
        <h1 className="text-7xl sm:text-9xl text-red-500 font-bold">404</h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg sm:text-base text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 ease-in-out">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
