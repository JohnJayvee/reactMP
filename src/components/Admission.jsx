import React from 'react';


const Admission = () => {

    return (
        <div>
            {/* Added margin-top to create space between Carousel and Admission section */}
            <div className='flex flex-col items-center text-center p-4 mt-8'>
                <div className='mb-4 animate-fadeInUp'>
                    <h2 className='text-4xl font-bold text-blue-950'>ADMISSION</h2>
                </div>
                <div className='animate-fadeInUp'>
                    <p className='text-lg'>Soar new heights with USL and together, we’ll make your dreams a reality!</p>
                </div>
            </div>

            {/* Responsive grid layout for images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="max-w-sm mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://usl.edu.ph/wp-content/uploads/2023/12/BES-1.jpg"
                                alt="bes-1"
                                className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                                sizes="(max-width: 357px) 100vw, 357px" />
                        </a>
                    </div>
                </div>

                <div className="max-w-sm mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://usl.edu.ph/wp-content/uploads/2023/12/COLLEGE.jpg"
                                alt="college-1"
                                className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                                sizes="(max-width: 357px) 100vw, 357px" />
                        </a>
                    </div>
                </div>

                <div className="max-w-sm mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://usl.edu.ph/wp-content/uploads/2023/12/GRAD-SCHOOL.jpg"
                                alt="gs-1"
                                className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                                sizes="(max-width: 357px) 100vw, 357px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Admission;