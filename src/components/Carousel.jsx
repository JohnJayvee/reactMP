// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { src: 'https://news.jrn.msu.edu/wp-content/uploads/2023/11/East-Lansing-high-school-photo.png', alt: 'Slide 1' },
        { src: 'https://via.placeholder.com/1920x1080?text=Slide+2', alt: 'Slide 2' },
        { src: 'https://via.placeholder.com/1920x1080?text=Slide+3', alt: 'Slide 3' },
        { src: 'https://via.placeholder.com/1920x1080?text=Slide+4', alt: 'Slide 4' },
        { src: 'https://via.placeholder.com/1920x1080?text=Slide+5', alt: 'Slide 5' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [currentIndex, items.length]);

    const updateCarousel = (index) => {
        setCurrentIndex((index + items.length) % items.length);
    };

    return (
        <div id="controls-carousel" className="relative w-full h-screen" data-carousel="static">
            <div className="relative w-full h-full overflow-hidden">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item={index === currentIndex ? 'active' : ''}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="block w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => updateCarousel(currentIndex - 1)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => updateCarousel(currentIndex + 1)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
