import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'; // Uncomment if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons
import PropTypes from 'prop-types';
import axios from 'axios';

import image from '../img/blog-1.jpg';

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
    style={{
      display: 'block',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-20px',
      zIndex: 1,
      cursor: 'pointer',
    }} // Adjust position here
    onClick={onClick}
  >
    <FontAwesomeIcon
      className="bg-blue-600 text-gray-300 border-2 border-transparent rounded-full text-md w-9 h-9 flex justify-center items-center"
      icon={faArrowRight}
    />
  </div>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
    style={{
      display: 'block',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '-20px',
      zIndex: 1,
      cursor: 'pointer',
    }} // Adjust position here
    onClick={onClick}
  >
    <FontAwesomeIcon
      className="bg-blue-600 text-gray-300 border-2 border-transparent rounded-full text-md w-9 h-9 flex justify-center items-center"
      icon={faArrowLeft}
    />
  </div>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

const Feedbacks = () => {
  const [Feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://kodegoapi.test/api/feedbacks', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('API Response:', response);
        // Ensure the response data has a staffs array
        if (response.data.success && Array.isArray(response.data.feedbacks)) {
          setFeedbacks(response.data.feedbacks);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching the team members:', error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides on desktop
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for large tablets and small desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="border-l-4 border-blue-700 pl-4 mb-4 md:mb-6 lg:mb-12">
        <h6 className="text-blue-700 uppercase">Feedbacks</h6>
        <h1 className="text-3xl md:text-4xl uppercase font-bold mb-0">We continuously incorporate customer feedbacks to refine our products and ensure they meet the evolving needs of our users.</h1>
      </div>
      <Slider {...settings}>
        {Feedbacks.map((feedback, index) => (
          <div key={index} className="team-item p-2">
            <div className="relative overflow-hidden group">
              <img src={image || 'default-image-path.jpg'} alt={feedback.name} className="w-full transition-transform duration-500 transform group-hover:scale-105" />
              <div className="team-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex space-x-2">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-light text-center text-gray-200 p-4 bg-blue-700">
              <h5 className="uppercase">{feedback.name}</h5>
              <p className="m-0">{feedback.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedbacks;
