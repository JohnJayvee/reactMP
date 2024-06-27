import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUtensils, faCut, faCat, faDog, faSyringe } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        icon: faHouse,
        title: "Pet Boarding",
        description: "Providing care for pets while their owners are away, either through in-home visits or at a boarding facility.",
        link: "Book.html"
    },
    {
        icon: faUtensils,
        title: "Pet Feeding",
        description: "We cater to pets with specific dietary needs, including weight management, allergies, and medical conditions, ensuring they get the right nutrition without compromising on taste.",
        link: "Book.html"
    },
    {
        icon: faCut,
        title: "Pet Grooming",
        description: "Bathing, hair trimming, nail clipping, and other grooming services to keep pets clean and healthy.",
        link: "Book.html"
    },
    {
        icon: faCat,
        title: "Pet Training",
        description: "Basic obedience training focuses on essential commands such as sit, stay, come, and heel. Perfect for dogs of all ages, this program helps establish a strong foundation of good behavior.",
        link: ""
    },
    {
        icon: faDog,
        title: "Pet Exercise",
        description: "Regular exercise and outdoor activities for dogs to maintain their physical and mental well-being.",
        link: "Book.html"
    },
    {
        icon: faSyringe,
        title: "Pet Treatment",
        description: "Encompass a wide range of veterinary care designed to keep your furry companions healthy, happy, and thriving.",
        link: "Book.html"
    }
];

const ServiceItem = ({ icon, title, description, link }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-stone-50 rounded p-4 flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-600 hover:text-white group">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={icon} className="text-4xl text-blue-700 mr-4 transition-colors duration-300 group-hover:text-pink-700" />
                <h5 className="uppercase font-bold">{title}</h5>
            </div>
            <p className="flex-grow">{description}</p>
            <a className="text-blue-700 transition-colors duration-300 hover:font-bold group-hover:text-pink-700 uppercase mt-4 inline-block" href={link}>Book Now<i className="bi bi-chevron-right"></i></a>
        </div>
    </div>
);

const Services = () => (
    <div className="container mx-auto p-4 mt-20">
        <div className="border-l-4 border-blue-700 pl-4 mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-blue-700 uppercase">Services</h6>
            <h1 className="text-4xl uppercase mb-0 font-bold">Our Excellent Pet Care Services</h1>
        </div>
        <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
                <ServiceItem
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                />
            ))}
        </div>
    </div>
);

export default Services;
