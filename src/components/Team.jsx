import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons
import image from '../img/blog-1.jpg'; // Example image import

const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '-20px',
            zIndex: 1,
            cursor: 'pointer',
        }}
        onClick={onClick}
    >
        <FontAwesomeIcon
            className="bg-blue-600 text-gray-300 border-2 border-transparent rounded-full text-md w-9 h-9 flex justify-center items-center"
            icon={faArrowRight}
        />
    </div>
);

const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '-20px',
            zIndex: 1,
            cursor: 'pointer',
        }}
        onClick={onClick}
    >
        <FontAwesomeIcon
            className="bg-blue-600 text-gray-300 border-2 border-transparent rounded-full text-md w-9 h-9 flex justify-center items-center"
            icon={faArrowLeft}
        />
    </div>
);

const TeamSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 slides on desktop
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // for large tablets and small desktops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768, // for tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // for mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const teamMembers = [
        {
            image: 'img/team-1.jpg',
            name: 'Dr. Angel C. Alcala',
            position: 'Veterinarian',
            social: [
                { icon: faFacebookF, link: 'https://www.facebook.com' },
                { icon: faTwitter, link: 'https://www.twitter.com' },
                { icon: faInstagram, link: 'https://www.instagram.com' }
            ]
        },
        {
            image: 'img/team-2.jpg',
            name: 'Dr. Ma. Gracia Dizon-Flores',
            position: 'Veterinarian',
            social: [
                { icon: faFacebookF, link: 'https://www.facebook.com' },
                { icon: faTwitter, link: 'https://www.twitter.com' },
                { icon: faInstagram, link: 'https://www.instagram.com' }
            ]
        },
        {
            image: 'img/team-2.jpg',
            name: 'Dr. Ma. Gracia Dizon-Flores',
            position: 'Veterinarian',
            social: [
                { icon: faFacebookF, link: 'https://www.facebook.com' },
                { icon: faTwitter, link: 'https://www.twitter.com' },
                { icon: faInstagram, link: 'https://www.instagram.com' }
            ]
        },
        {
            image: 'img/team-2.jpg',
            name: 'Dr. Ma. Gracia Dizon-Flores',
            position: 'Veterinarian',
            social: [
                { icon: faFacebookF, link: 'https://www.facebook.com' },
                { icon: faTwitter, link: 'https://www.twitter.com' },
                { icon: faInstagram, link: 'https://www.instagram.com' }
            ]
        },
        // Add more team members as needed
    ];

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <div className="border-l-4 border-blue-700 pl-4 mb-4 md:mb-6 lg:mb-12">
                <h6 className="text-blue-700 uppercase">Team Members</h6>
                <h1 className="text-3xl md:text-4xl uppercase font-bold mb-0">Qualified School Staff</h1>
            </div>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-item p-2">
                        <div className="relative overflow-hidden group">
                            <img src={image} alt={member.name} className="w-full transition-transform duration-500 transform group-hover:scale-105" />
                            <div className="team-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex space-x-2">
                                    {member.social.map((socialLink, idx) => (
                                        <a key={idx} href={socialLink.link} target="_blank" rel="noopener noreferrer" className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300">
                                            <FontAwesomeIcon icon={socialLink.icon} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center text-gray-200 p-4 bg-blue-700">
                            <h5 className="uppercase">{member.name}</h5>
                            <p className="m-0">{member.position}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamSection;
