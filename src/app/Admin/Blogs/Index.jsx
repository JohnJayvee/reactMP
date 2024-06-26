import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [blogs, setBlogs] = useState([]);

    // Fetch blogs from API
    useEffect(() => {
        axios.get('http://kodegoapi.test/api/blogs', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.data.success) {
                    setBlogs(response.data.blogs);
                    console.log(response.data)
                } else {
                    console.error('Failed to fetch blogs:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Remove blog based on ID
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-gray-100 w-full md:w-64">
                <div className="p-4">
                    <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
                    <p className="mt-2 text-sm">Welcome, Admin!</p>
                </div>
                <nav className="mt-6">
                    <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white transition duration-200">Dashboard</a>
                    <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white transition duration-200">Users</a>
                    <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white transition duration-200">Blogs</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 overflow-x-auto">
                {/* Add Blog Button */}
                <div className="mb-6">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200">Add Blog</button>
                </div>

                {/* Blogs Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* Map over blogs array and render rows */}
                            {blogs.map(blog => (
                                <tr key={blog.id} className="hover:bg-gray-100 transition duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">{blog.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                                    <td className="px-6 py-4 whitespace-wrap max-w-xs truncate">{blog.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(blog.created_at).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg transition duration-200">Edit</button>
                                        <button onClick={() => handleDelete(blog.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition duration-200 ml-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
