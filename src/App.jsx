import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';

// Custom lazy function with preload


const Login = lazy(() => import('./app/Login/Page'));
const HomePage = lazy(() => import('./app/Index'));
const AboutPage = lazy(() => import('./app/About/Page'));
const Services = lazy(() => import('./app/Services/Page'));
const Contact = lazy(() => import('./app/Contact/Page'));
const Booking = lazy(() => import('./app/Book/Page'));
const PageNotFound = lazy(() => import('./app/PageNotFound/Page'));

// import Booking from './app/Book/Index';


const App = () => {

  return (
    <div>
      <Suspense fallback={<div><LoadingScreen /></div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
