import React from 'react';

import OverviewIMG from '../img/overview.png'

const Overview = () => {
  return (
    <div className='container mx-auto px-4 pt-8'>
      <div className='border-l-4 border-blue-700 pl-4 mb-4 md:mb-6 lg:mb-12'>
        <h6 className='text-blue-700 uppercase'>Overview</h6>
        <h1 className='text-3xl md:text-4xl uppercase font-bold mb-0'>sdfkjsdlfjl</h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 p-4'>
          <h3 className='text-2xl font-semibold mb-4'>
            JJ Web Service Solution is a full-service digital marketing agency based in Manila, Philippines.
          </h3>
          <p className='mb-4'>
            We rely on high-quality, research-based insights as well as experience, intellect and intuition. We apply rigorous analysis and strategic thinking to create the most effective digital communications solutions for all our clients. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quos nam nobis accusamus placeat exercitationem, iste quas odio quisquam, distinctio eius incidunt blanditiis possimus consectetur commodi aspernatur explicabo eum odit! Dolores quidem eaque ipsam, ducimus tenetur nobis obcaecati soluta explicabo fuga hic voluptatibus exercitationem magni voluptatem inventore! In, repudiandae quibusdam!
          </p>
          <a className='text-blue-500 hover:underline' href='/about'>About Us</a>
        </div>
        <div className='md:w-1/2 p-4'>
          <img className='w-full h-auto' src={OverviewIMG} alt='Overview' />
        </div>
      </div>
    </div>
  );
};

export default Overview;
