import React from 'react';
import WebDevIMG from '../img/webDev.png';

const WebDev = () => {
  return (
    <div className='container mx-auto px-4 mt-56'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 p-4'>
          <img className='w-full h-auto' src={WebDevIMG} alt='Web Development' />
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='border-l-4 border-blue-700 pl-4 mb-4 md:mb-6 lg:mb-12'>
            <h6 className='text-blue-700 uppercase'>Web Development</h6>
            <h1 className='text-3xl md:text-4xl uppercase font-bold mb-0'>Do you need a website for your organization that needs a reliable?</h1>
          </div>
          <h3 className='text-2xl font-semibold mb-4'>
            Our web development team excels in creating dynamic and scalable digital solutions, leveraging cutting-edge technologies to empower businesses and enhance their online presence.
          </h3>
          <p className='mb-4'>
            Our custom web design services encompass a wide spectrum of offerings, ranging from crafting straightforward WordPress websites using meticulously customized design themes to developing sophisticated content management systems (CMS) using robust yet flexible frameworks. Our approach integrates meticulous attention to detail with innovative design principles, ensuring each website is not only visually appealing but also tailored to meet the unique needs and objectives of our clients. Whether it's enhancing user experience through intuitive navigation and responsive design or implementing advanced functionalities, our team is dedicated to delivering comprehensive solutions that empower businesses to thrive in the digital landscape.
          </p>
          <a className='text-blue-500 hover:underline' href='/about'>About Us</a>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
