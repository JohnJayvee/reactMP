import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import blogImage1 from '../../img/blog-1.jpg';
import blogImage2 from '../../img/blog-2.jpg';
import blogImage3 from '../../img/blog-3.jpg';
import blogImage4 from '../../img/blog-4.jpg';
import blogImage5 from '../../img/blog-5.jpg';
import blogImage6 from '../../img/blog-6.jpg';
import blogImage7 from '../../img/blog-7.jpg';
import blogImage8 from '../../img/blog-8.jpg';


const Gallery = () => {
    const blogs = [
        {
            id: 1,
            image: blogImage1,
            date: '1st November, 2021',
            author: 'admin',
            title: 'Principal’s Protocol',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 2,
            image: blogImage2,
            date: '21st November, 2021',
            author: 'admin',
            title: 'A Principal’s Reflections',
            description: 'Eric Sheninger is an award-winning principal, best-selling author, keynote speaker, and coach. His most recent publication is called Disruptive Thinking In Our Classrooms: Preparing Learners for Their Future, and his most recent blog posts consider what it means to be an equitable leader, upgrade a KWL chart, and optimize feedback for student learning.',
            link: '#'
        },
        {
            id: 3,
            image: blogImage3,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 4,
            image: blogImage4,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 5,
            image: blogImage5,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 6,
            image: blogImage6,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 7,
            image: blogImage7,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },
        {
            id: 8,
            image: blogImage8,
            date: '21st November, 2021',
            author: 'admin',
            title: 'Learning is What Makes You Perfect',
            description: 'BetterLesson highlights its partners with teachers and education leaders in co-creating professional learning solutions and instructional resources. The last several blog posts discuss an action plan for closing gaps and accelerating growth, leadership strategies to boost teacher morale, and ways data can be used to personalize instruction.',
            link: '#'
        },

        // Add more blog objects here as needed
    ];

    return (
        <div>
            <Header />
            <div>
                <section id="api-data" className="w-full px-4 pt-6 md:px-6 lg:px-12 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="bg-white rounded shadow-md overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2 text-gray-600">
                                        <a href="#" className="hover:text-gray-900 transition duration-300 ease-in-out">
                                            <i className="fas fa-clock mr-1"></i>
                                            {blog.date}
                                        </a>
                                        <a href="#" className="hover:text-gray-900 transition duration-300 ease-in-out">
                                            <FontAwesomeIcon className='text-pink-700 mr-2' icon={faUser} />
                                            {blog.author}
                                        </a>
                                    </div>
                                    <h3 className="text-lg">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4">{blog.description}</p>
                                    <a href={blog.link} className="bg-pink-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
