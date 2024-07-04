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
                        <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">Your Partner in Digital Excellence</h1>
                    </div>
                    <p className="text-md mb-4">
                    Welcome to <span className="companyName">JJ Web Service Solution</span>, your trusted partner in digital excellence. We specialize in delivering top-tier Web Design, Development, and Online Marketing services tailored to your unique business needs. Our dedicated team of experts is passionate about transforming your vision into reality, crafting stunning designs, building robust and scalable websites, and driving growth through strategic online marketing.
                    </p>
                    <p className="text-md mb-4">
                    We believe in the power of creativity and innovation. With years of experience and a deep understanding of the digital landscape, we are committed to providing solutions that not only meet but exceed your expectations. We take pride in our collaborative approach, working closely with you to ensure every project reflects your brand's identity and achieves your business goals.
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
                        <div className="relative h-48">
                            <TransitionGroup className="relative h-full">
                                {activeTab === 'mission' && (
                                    <CSSTransition key="mission" timeout={300} classNames="fade">
                                        <div className="absolute inset-0 leading-7 text-black p-4">
                                            <p className="mb-72 text-md">
                                                Our mission in web development is to create designs that are fully responsive and free from bugs or glitches. We are dedicated to ensuring that every website we develop not only looks great but also functions seamlessly on all devices

                                            </p>
                                        </div>
                                    </CSSTransition>
                                )}
                                {activeTab === 'vision' && (
                                    <CSSTransition key="vision" timeout={300} classNames="fade">
                                        <div className="absolute inset-0 leading-7 text-black p-4">
                                            <p className="mb-4">
                                                Our vision is to set a new standard in web development by consistently delivering innovative and functional designs. We aspire to be recognized as leaders in creating user-friendly, aesthetically pleasing, and highly responsive websites that exceed client expectations and enhance the digital experience for all users.
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