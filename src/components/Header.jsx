import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className='bg-blue-700 p-4'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <div className='flex items-center'>
                        {/* Logo or site title */}
                        <a href='#' className='text-white text-2xl font-semibold'>
                            <FontAwesomeIcon className='text-pink-700' icon={faUserGraduate} /> Kodego College
                        </a>
                    </div>
                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            className='text-white focus:outline-none'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className='h-6 w-6'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16m-7 6h7'
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Desktop navigation links */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <ul className='flex space-x-4'>
                            <li>
                                <Link to='/' className='text-gray-100 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 transform hover:scale-105'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className='text-gray-100 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 transform hover:scale-105'>About</Link>
                            </li>
                            <li>
                                <Link to='/blogs' className='text-gray-100 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 transform hover:scale-105'>Blogs</Link>
                            </li>
                            <li>
                                <a href='#' className='text-gray-100 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 transform hover:scale-105'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Dropdown menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className='px-2 pt-2 pb-3 space-y-1'>
                        <li>
                            <Link to='/' className='text-gray-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition duration-300 transform hover:scale-105'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='text-gray-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition duration-300 transform hover:scale-105'>About</Link>
                        </li>
                        <li>
                            <a href='/blogs' className='text-gray-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition duration-300 transform hover:scale-105'>Blogs</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition duration-300 transform hover:scale-105'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
