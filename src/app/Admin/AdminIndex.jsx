import React from 'react'
import useAuth from '../../components/Auth';
import useInactivityTimeout from '../../components/useInactivityTimeout'

const AdminIndex = () => {
  const isLoggedIn = useAuth();

  useInactivityTimeout(() => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      window.location.reload();
    } else if (localStorage.getItem("token")) {
      return null;
    }
  });

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div><h1>Welcome to admin panel!</h1></div>
  )
}

export default AdminIndex