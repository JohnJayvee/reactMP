import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Carousel from '../layout/Carousel';
import Admission from '../components/Admission';
import useAuth from '../components/Auth';
import Login from './Login/Page';
import useInactivityTimeout from '../components/useInactivityTimeout'
import { redirect } from "react-router-dom";


const HomePage = () => {
    const isLoggedIn = useAuth();


    useInactivityTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
    });

    if (!isLoggedIn) {
        redirect('/login')

    }

    return (
        <div>
            <Header />
            <Carousel />
            <Admission />
            <Footer />
        </div>
    );
};

export default HomePage;