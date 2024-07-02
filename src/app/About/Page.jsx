import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import MissionVision from '../../layout/MissionVision';
import Services from '../../layout/Services'
import Team from '../../layout/Team';


import './AboutPage.css';

const AboutPage = () => {


    return (
        <div>
            <Header />
            <MissionVision />
            <Services />
            <Team />
            <Footer />
        </div>
    );
};

export default AboutPage;
