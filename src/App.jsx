import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

// Custom lazy function with preload


const Login = lazy(() => import('./app/Login/Page'));
const HomePage = lazy(() => import('./app/Index'));
const AboutPage = lazy(() => import('./app/About/Page'));
const Blog = lazy(() => import('./app/Blogs/Index'));
const AdminBlog = lazy(() => import('./app/Admin/Blogs/Index'));
const Gallery = lazy(() => import('./app/Gallery/Index'));


const App = () => {

  return (
    <div>
      <Suspense fallback={<div><LoadingScreen /></div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
