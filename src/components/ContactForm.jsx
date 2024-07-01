import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        cellphoneNumber: '',
        company: '',
        service: '',
        targetDate: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://kodegoapi.test/api/order/create', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response:', response.data);
            toast.success('Form submitted successfully!');
            // Reset form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                position: '',
                cellphoneNumber: '',
                company: '',
                service: '',
                targetDate: '',
                message: ''
            });
            setErrors({});
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data && error.response.data.errors) {
                const { errors: apiErrors } = error.response.data;
                setErrors(apiErrors);
                toast.error('Please check the form for errors.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // Clear error for the current input field on change
        setErrors({ ...errors, [name]: null });
    };

    return (
        <div className="container mx-auto mt-20 px-4">
            <div className="flex justify-center">
                <div className="w-full max-w-7xl px-4 mb-8">
                    <div className="border-l-8 border-blue-700 pl-5 mb-5">
                        <h6 className="text-blue-700 text-md uppercase">Book Now</h6>
                        <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-10">Book services that you need</h1>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 uppercase">Fill up the form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First Name</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-blue-300'}`}
                                        name="firstName"
                                        id="first-name"
                                        type="text"
                                        placeholder="Enter your first name"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName[0]}</p>}
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last Name</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-blue-300'}`}
                                        name="lastName"
                                        id="last-name"
                                        type="text"
                                        placeholder="Enter your last name"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="position" className="block text-lg font-medium text-gray-700">Position</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.position ? 'border-red-500' : 'border-blue-300'}`}
                                        name="position"
                                        id="position"
                                        type="text"
                                        placeholder="Enter your position"
                                        required
                                        value={formData.position}
                                        onChange={handleInputChange}
                                    />
                                    {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="company" className="block text-lg font-medium text-gray-700">Company</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.company ? 'border-red-500' : 'border-blue-300'}`}
                                        name="company"
                                        id="company"
                                        type="text"
                                        placeholder="Enter your company name"
                                        required
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />
                                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="phone-number" className="block text-lg font-medium text-gray-700">Phone Number</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.cellphoneNumber ? 'border-red-500' : 'border-blue-300'}`}
                                        name="cellphoneNumber"
                                        id="phone-number"
                                        type="text"
                                        placeholder="Enter your phone number"
                                        required
                                        value={formData.cellphoneNumber}
                                        onChange={handleInputChange}
                                    />
                                    {errors.cellphoneNumber && <p className="text-red-500 text-xs mt-1">{errors.cellphoneNumber[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-blue-300'}`}
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="select-service" className="block text-lg font-medium text-gray-700">Book a Service</label>
                                    <select
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.service ? 'border-red-500' : 'border-blue-300'}`}
                                        name="service"
                                        id="select-service"
                                        required
                                        value={formData.service}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="website-creation">Website Creation and Maintenance</option>
                                        <option value="content-marketing">Content Marketing</option>
                                        <option value="creative-branding">Creative Branding</option>
                                        <option value="seo">Search Engine Optimization</option>
                                        <option value="ssm">Social Media Marketing</option>
                                        <option value="virtual-assistant">Virtual Assistant</option>
                                        <option value="hosting-domain">Hosting and Domain</option>
                                        <option value="influencer-marketing">Influencer Marketing</option>
                                    </select>
                                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="target-date" className="block text-lg font-medium text-gray-700">Target Date</label>
                                    <input
                                        className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.targetDate ? 'border-red-500' : 'border-blue-300'}`}
                                        name="targetDate"
                                        id="target-date"
                                        type="date"
                                        required
                                        value={formData.targetDate}
                                        onChange={handleInputChange}
                                    />
                                    {errors.targetDate && <p className="text-red-500 text-xs mt-1">{errors.targetDate[0]}</p>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="book-message" className="block text-lg font-medium text-gray-700">Type your message here</label>
                                    <textarea
                                        className={`form-control w-full h-40 p-3 border rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'border-blue-300'}`}
                                        name="message"
                                        id="book-message"
                                        placeholder="Enter your message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
                                </div>
                                <div className="w-full px-2">
                                    <button
                                        type="submit"
                                        className="button bg-blue-700 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-800"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default BookingForm;
