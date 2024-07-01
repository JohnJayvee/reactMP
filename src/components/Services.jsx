import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faLaptop, faLayerGroup, faCloud, faCode, faMobileAlt, faGauge } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const services = [
    {
        icon: faLaptop,
        title: "Web Design",
        description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization",
        link: "Book.html"
    },
    {
        icon: faLayerGroup,
        title: "Development",
        description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services",
        link: "Book.html"
    },
    {
        icon: faCloud,
        title: "Cloud Server",
        description: "A cloud server is a pooled, centralized server resource that is hosted and delivered over a network—typically the Internet—and accessed on demand by multiple users. Cloud servers can perform all the same functions of a traditional physical server, delivering processing power, storage and applications",
        link: "Book.html"
    },
    {
        icon: faCode,
        title: "Clean Code",
        description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way",
        link: ""
    },
    {
        icon: faMobileAlt,
        title: "Fully Responsive",
        description: "Responsive web design or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction",
        link: "Book.html"
    },
    {
        icon: faGauge,
        title: "Custom Support",
        description: "Web performance refers to the speed in which web pages are downloaded and displayed on the user's web browser. Web performance optimization, or website optimization is the field of knowledge about increasing web performance",
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
ServiceItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};


const Services = () => (
    <div className="container mx-auto p-4 mt-20">
        <div className="border-l-4 border-blue-700 pl-4 mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-blue-700 uppercase">Services</h6>
            <h1 className="text-4xl uppercase mb-0 font-bold">Our Development Services</h1>
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
