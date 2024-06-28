import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Admission from '../components/Admission';
import useAuth from '../components/Auth';
import Section1 from '../components/SectionCarousel';
import Login from './Login/Page';
import useInactivityTimeout from '../components/useInactivityTimeout'
import { redirect } from "react-router-dom";
import SectionCarousel from '../components/SectionCarousel';
import SectionBanner from '../components/SectionBanner';


const HomePage = () => {
    const isLoggedIn = useAuth();


    // useInactivityTimeout(() => {
    //     localStorage.removeItem("token");
    //     window.location.reload();
    // });

    // if (!isLoggedIn) {
    //     redirect('/login')

    // }

    return (
        <div>
            <Header />
            {/* <Carousel /> */}
            <SectionCarousel/>
            <SectionBanner/>
            <Admission />
            <Footer />
        </div>
    );
};

export default HomePage;