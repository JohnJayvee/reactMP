import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Carousel from '../layout/Carousel';
// import useAuth from '../components/Auth';
// import useInactivityTimeout from '../components/useInactivityTimeout'
import Feedback from '../layout/Feedback';
import Overview from '../layout/Overview';
import WebDev from '../layout/WebDev';



const HomePage = () => {
  // const isLoggedIn = useAuth();

  // useInactivityTimeout(() => {
  //   if (sessionStorage.getItem("token")) {
  //     sessionStorage.removeItem("token");
  //     window.location.reload();
  //   } else if (localStorage.getItem("token")) {
  //     return null;
  //   }
  // });

  // if (!isLoggedIn) {
  //   return null;
  // }


  return (
    <div>
      <Header />
      <Carousel />
      <Overview />
      <WebDev />
      <Feedback />
      <Footer />
    </div>
  );
};


export default HomePage;