import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Admission from '../components/Admission';
import useAuth from '../components/Auth';
import Login from './Login/Page';
import useInactivityTimeout from '../components/useInactivityTimeout'

const HomePage = () => {
    const isLoggedIn = useAuth();

    useInactivityTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
    });

    if (!isLoggedIn) {
        return <Login />;
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