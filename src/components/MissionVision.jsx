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
                        <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">We Keep Your Education Quality</h1>
                    </div>
                    <p className="text-md mb-4">
                        Welcome to Kodego School, a beacon of innovation and excellence in tech education. Established with the mission to bridge the gap between traditional education and the rapidly evolving demands of the tech industry, Kodego School stands at the forefront of preparing students for the challenges and opportunities of the digital age.
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
                                    className={`block w-full text-lg uppercase font-semibold py-2 px-4 ${activeTab === 'vision' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-primary'} rounded-full focus:outline-none`}
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
                                            <p className="mb-4 text-md">
                                                At Kodego School, our mission is simple yet profound: to empower individuals through education and technology. We strive to create a learning environment that nurtures curiosity, fosters creativity, and instills the confidence to innovate. Our programs are designed to equip students with the skills, knowledge, and mindset needed to thrive in today's fast-paced tech landscape.
                                            </p>
                                        </div>
                                    </CSSTransition>
                                )}
                                {activeTab === 'vision' && (
                                    <CSSTransition key="vision" timeout={300} classNames="fade">
                                        <div className="absolute inset-0 leading-7 text-black p-4">
                                            <p className="mb-4">
                                                We envision a future where education is flexible, inclusive, and directly aligned with industry needs. Kodego School aims to be a global leader in tech education, constantly evolving and adapting our curriculum to stay ahead of technological advancements. We are committed to producing graduates who are not only proficient in their technical skills but also capable of critical thinking, problem-solving, and continuous learning.
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