// src/components/Carousel.jsx
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../img/c1.jpg';
import carousel2 from '../img/c2.jpg';
import carousel3 from '../img/c3.jpg';

const Carousel = () => {
  const items = [
    { src: carousel1, alt: 'Slide 1', text: 'Exceptional Web Design Services' },
    { src: carousel2, alt: 'Slide 2', text: 'Innovative Web Development Solution' },
    { src: carousel3, alt: 'Slide 3', text: 'Effective Online Marketing Strategies' }
  ];

  const [sliderKey, setSliderKey] = useState(0); // State to manage key prop
  const sliderRef = useRef(null);

  const settings = {
    key: sliderKey, // Key prop to force re-render
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay interval to 2 seconds
    //nextArrow: <NextArrow />, // Disable Next Arrow
    //prevArrow: <PrevArrow />, // Disable Previous Arrow
    accessibility: false, // Disable keyboard navigation
    swipe: false, // Disable touch/swipe navigation
    draggable: false, // Disable dragging to navigate
    pauseOnHover: false, // Disable pause on hover
    pauseOnFocus: false, // Disable pause on focus
    beforeChange: () => { // Restart autoplay on before slide change
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    }
  };

  useEffect(() => {
    // Increment key to force re-render
    setSliderKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div id="controls-carousel" className="relative w-full h-screen">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={item.src}
              alt={item.alt}
              className="block w-full h-full object-cover"
              style={{ minHeight: '300px' }} // Adjust according to your design needs
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 text-white text-center">
              <h1 className='text-4xl md:text-6xl lg:text-8xl uppercase font-bold mb-0'>{item.text}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    onClick={onClick}
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
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    onClick={onClick}
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
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
);

export default Carousel;
