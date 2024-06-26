import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import image from '../img/blog-1.jpg';

const MissionVision = () => {

    const [activeTab, setActiveTab] = useState('mission');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (<>
        <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="mb-5 lg:mb-0" style={{ minHeight: "500px" }}>
                    <div className="relative h-full">
                        <img className="absolute inset-0 w-full h-full rounded object-cover" src={image} alt="About Us" />
                    </div>
                </div>
                <div className="pl-5 mb-5 lg:mb-0">
                    <div className="border-l-8 border-blue-700 pl-5 mb-5">
                        <h6 className="text-blue-700 text-md uppercase">About Us</h6>
                        <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">We Keep Your Pets Happy All Time</h1>
                    </div>
                    <p className="text-lg mb-4">
                        At Furr Care Services, we're more than just a business - we're a family of passionate pet lovers dedicated to providing exceptional care for your furry friends. With years of experience in the industry, our team is committed to delivering personalized attention, reliable services, and a safe, nurturing environment for every pet entrusted to our care.
                    </p>
                    <div className="relative overflow-hidden">
                        <ul className="flex justify-between mb-3">
                            <li className="w-1/2">
                                <button
                                    className={`block w-full text-lg uppercase font-semibold py-2 px-4 ${activeTab === 'mission' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-primary'} rounded-full focus:outline-none`}
                                    onClick={() => handleTabChange('mission')}
                                >
                                    Our Mission
                                </button>
                            </li>
                            <li className="w-1/2">
                                <button
                                    className={`block w-full text-lg uppercase font-semibold py-2 px-4 ${activeTab === 'vision' ? 'bg-blue-700 text-white' : 'bg-white text-primary'} rounded-full focus:outline-none`}
                                    onClick={() => handleTabChange('vision')}
                                >
                                    Our Vision
                                </button>
                            </li>
                        </ul>
                        <div className="relative h-32">
                            <TransitionGroup className="relative h-full">
                                {activeTab === 'mission' && (
                                    <CSSTransition key="mission" timeout={300} classNames="fade">
                                        <div className="absolute inset-0 leading-7 text-black p-4">
                                            <p className="mb-4">
                                                Our vision is to create a dynamic and inclusive educational environment that nurtures the intellectual, social, and emotional development of every student, inspiring them to reach their full potential and become innovative leaders prepared for a rapidly changing world. Our mission is to provide a comprehensive and challenging educational experience that fosters academic excellence, personal growth, inclusivity, diversity, global citizenship, and ethical leadership. We are committed to delivering a rigorous and engaging curriculum that promotes critical thinking and creativity while celebrating the diverse backgrounds and talents of our community. We aim to develop globally-minded individuals who appreciate cultural differences and take action to address local and global issues. By nurturing each student's intellectual, emotional, physical, and social well-being, we strive to prepare them not just for academic success, but for a lifetime of meaningful and purposeful engagement in the world.
                                            </p>
                                        </div>
                                    </CSSTransition>
                                )}
                                {activeTab === 'vision' && (
                                    <CSSTransition key="vision" timeout={300} classNames="fade">
                                        <div className="absolute inset-0 leading-7 text-black p-4">
                                            <p className="mb-4">
                                                Our vision is to create a dynamic and inclusive educational environment that nurtures the intellectual, social, and emotional development of every student. We aim to be a beacon of excellence where students are inspired to reach their full potential and become innovative leaders who are prepared to tackle the challenges of a rapidly changing world. We envision a school community that fosters a lifelong love of learning, values diversity, promotes global awareness, and instills a deep sense of social responsibility. Through a holistic approach to education, we strive to cultivate individuals who are not only academically proficient but also morally grounded, empathetic, and committed to making a positive impact in their communities and beyond.
                                            </p>
                                        </div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}

export default MissionVision