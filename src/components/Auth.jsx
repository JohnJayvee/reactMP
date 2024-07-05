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
      if (!localStorage.getItem('token')) {
        // If token is in sessionStorage, remove it when the browser is closed
        window.addEventListener('beforeunload', () => {
          sessionStorage.removeItem('token');
        });
      }
    }
  }, [navigate]);

  return isLoggedIn;
};

export default useAuth;
