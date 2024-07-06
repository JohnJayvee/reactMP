import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      setIsLoggedIn(true);

      // // Handle logout only when token is in sessionStorage
      // if (!localStorage.getItem('token')) {
      //   const handleBeforeUnload = (event) => {
      //     // Ensure token removal only when browser/tab is closed, not on page reload
      //     if (event.currentTarget.performance.navigation.type !== 1) {
      //       sessionStorage.removeItem('token');
      //     }
      //   };

      //   window.addEventListener('beforeunload', handleBeforeUnload);

      //   return () => {
      //     window.removeEventListener('beforeunload', handleBeforeUnload);
      //   };
      // }
    }
  }, [navigate]);

  return isLoggedIn;
};

export default useAuth;
