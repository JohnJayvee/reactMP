import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MissionVision from '../../components/MissionVision';
import Services from '../../components/Services'
import Team from '../../components/Team';


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
