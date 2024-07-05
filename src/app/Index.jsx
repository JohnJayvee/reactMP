import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Carousel from '../layout/Carousel';
import Admission from '../components/Admission';
import useAuth from '../components/Auth';
import useInactivityTimeout from '../components/useInactivityTimeout'
// import ExpandableText from '../components/ExpandableText';
import Feedback from '../layout/Feedback';
import Overview from '../layout/Overview';
import WebDev from '../layout/WebDev';


const HomePage = () => {
    const isLoggedIn = useAuth();


    useInactivityTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
    });

    // if (!isLoggedIn) {
    //     alert('Please Login');

    // }


    return (
        <div>
            <Header />
            <Carousel />
            {/* <ExpandableText maxChars={20}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti animi voluptates alias quaerat facere facilis sint dolore ipsam, hic veritatis! Perspiciatis, quam vel error dicta dolorum doloribus quod a.</ExpandableText> */}
            <Overview />
            <WebDev />
            <Feedback />
            <Footer />
        </div>
    );
};


export default HomePage;