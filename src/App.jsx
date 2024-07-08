import React, { Suspense, lazy, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';

const Login = lazy(() => import('./app/Login/Page'));
const HomePage = lazy(() => import('./app/Index'));
const AboutPage = lazy(() => import('./app/About/Page'));
const Services = lazy(() => import('./app/Services/Page'));
const Contact = lazy(() => import('./app/Contact/Page'));
const Booking = lazy(() => import('./app/Book/Page'));
const PageNotFound = lazy(() => import('./app/PageNotFound/Page'));
const AdminPage = lazy(() => import('./app/Admin/AdminIndex'));


const routes = [
  { path: '/', exact: true, title: 'Home', element: <HomePage /> },
  { path: '/about', title: 'About', element: <AboutPage /> },
  { path: '/contact', title: 'Contact', element: <Contact /> },
  { path: '/booking', title: 'Booking', element: <Booking /> },
  { path: '/services', title: 'Services', element: <Services /> },
  { path: '/login', title: 'Login', element: <Login /> },
  { path: '/admin', title: 'Login', element: <AdminPage /> },
  { path: '*', title: 'Page Not Found', element: <PageNotFound /> },
];

const App = () => {
  const location = useLocation();
  const element = useRoutes(routes);

  useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname) || routes.find((route) => route.path === '*');
    if (currentRoute) {
      document.title = currentRoute.title;
    }
  }, [location]);

  return (
    <div>
      <Suspense fallback={<LoadingScreen />}>
        {element}
      </Suspense>
    </div>
  );
};

export default App;
