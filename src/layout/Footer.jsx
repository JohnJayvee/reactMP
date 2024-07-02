import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-blue-700 text-gray-300'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left'>
          {/* Logo and About */}
          <div className='mb-8 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start'>
            <a href='/' className='text-white font-bold text-xl flex items-center'>
              <FontAwesomeIcon className='text-pink-700 mr-2' icon={faCode} /> JJ Web Service Solution
            </a>
            <p className='mt-4 text-md text-center md:text-left'>
              We’d love to hear from you! Whether you have questions about our services, need to schedule an appointment, or simply want to learn more about how we can help your furry friend, our team is here to assist you.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-semibold'>Quick Links</h1>
            <ul className='space-y-2 text-center md:text-left'>
              <li>
                <a href='/' className='hover:text-white hover:font-bold transition-colors duration-300 text-md'>Home</a>
              </li>
              <li>
                <a href='#' className='hover:text-white hover:font-bold transition-colors duration-300 text-md'>About Us</a>
              </li>
              <li>
                <a href='#' className='hover:text-white hover:font-bold transition-colors duration-300 text-md'>Services</a>
              </li>
              <li>
                <a href='#' className='hover:text-white hover:font-bold transition-colors duration-300 text-md'>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-semibold'>Contact Us</h1>
            <ul className='mt-4 space-y-2 text-center md:text-left'>
              <li><FontAwesomeIcon icon={faLocationDot} /> 123 Main Street Quezon City, NCR</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com</li>
              <li><FontAwesomeIcon icon={faPhone} /> Phone: +1 (123) 456-7890</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-semibold'>Follow Us</h1>
            <ul className='mt-4 flex space-x-4'>
              <li>
                <a href='#' className='text-gray-300 text-xl hover:text-white hover:font-bold transform transition-transform duration-300 hover:scale-110'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 text-xl hover:text-white transform transition-transform duration-300 hover:scale-110'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 text-xl hover:text-white transform transition-transform duration-300 hover:scale-110'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 text-xl hover:text-white transform transition-transform duration-300 hover:scale-110'>
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
