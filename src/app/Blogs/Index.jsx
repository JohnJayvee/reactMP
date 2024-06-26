import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// const Footer = React.lazy(() => import('../../components/Footer'));
import blogImagePlaceholder from '../../img/blog-1.jpg'; // Placeholder image for blogs without images

const Gallery = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://kodegoapi.test/api/blogs', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = response.data;

                if (Array.isArray(data)) {
                    setBlogs(data);
                } else if (typeof data === 'object' && data.blogs) {
                    setBlogs(data.blogs);
                    console.log(data);

                } else {
                    console.error('Invalid API response structure:', data);
                    setError('Invalid API response structure');
                }
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Error fetching blogs');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 pt-6 md:px-6 lg:px-12 mb-6">
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <div key={blog.id} className="bg-white rounded shadow-md overflow-hidden">
                                    <img
                                        src={blog.image || blogImagePlaceholder}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2 text-gray-600">
                                            <a href="#" className="hover:text-gray-900 transition duration-300 ease-in-out">
                                                <i className="fas fa-clock mr-1"></i>
                                                {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </a>
                                            <a href="#" className="hover:text-gray-900 transition duration-300 ease-in-out">
                                                <FontAwesomeIcon className='text-pink-700 mr-2' icon={faUser} />
                                                Admin
                                            </a>
                                        </div>
                                        <h3 className="text-lg">{blog.title}</h3>
                                        <p className="text-gray-600 mb-4">{blog.description}</p>
                                        <a href={blog.link} className="bg-pink-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block">Read more</a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No blogs available</p>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
