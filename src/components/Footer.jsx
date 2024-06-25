// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        // <footer>
        //     <p>&copy; 2024 My React App</p>
        // </footer>

        <footer className='bg-blue-700 text-gray-300'>
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left'>
                    {/* Logo and About */}
                    <div className='mb-8 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start'>
                        <a href='/' className='text-white font-bold text-xl'>
                            <FontAwesomeIcon className='text-pink-700' icon={faUserGraduate} /> Kodego College
                        </a>
                        <p className='mt-4 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet risus.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4 flex flex-col items-center md:items-start'>
                        <h3 className='text-lg font-semibold'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='/' className='hover:text-white transition-colors duration-300'>Home</a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white transition-colors duration-300'>About Us</a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white transition-colors duration-300'>Services</a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white transition-colors duration-300'>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='text-lg font-semibold'>Contact Us</h3>
                        <ul className='mt-4 space-y-2'>
                            <li>123 Main Street</li>
                            <li>Quezon City, NCR</li>
                            <li>Email: info@example.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='text-lg font-semibold'>Follow Us</h3>
                        <ul className='mt-4 flex space-x-4'>
                            <li>
                                <a href='#' className='text-gray-300 hover:text-white transition-colors duration-300'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-gray-300 hover:text-white transition-colors duration-300'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-gray-300 hover:text-white transition-colors duration-300'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-gray-300 hover:text-white transition-colors duration-300'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
