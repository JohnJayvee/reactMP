import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Carousel from '../layout/Carousel';
import Admission from '../components/Admission';
import useAuth from '../components/Auth';
import useInactivityTimeout from '../components/useInactivityTimeout'
import Feedback from '../layout/Feedback';
import Overview from '../layout/Overview';
import WebDev from '../layout/WebDev';
import WebPackage from '../layout/WebPackage';
import CounterUpPage from '../layout/CounterUpPage';



const HomePage = () => {
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
        <div>
            <Header />
            <Carousel />
            <Overview />
            <WebDev />
            <WebPackage />
            <CounterUpPage/>
            <Feedback />
            <Footer />
        </div>
    );
};


export default HomePage;