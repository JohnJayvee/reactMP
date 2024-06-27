import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setValidationErrors({
            ...validationErrors,
            [e.target.name]: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        setValidationErrors({});

        try {
            const response = await axios.post(
                'http://kodegoapi.test/api/message/create',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response)
            setSuccess('Message sent successfully!');
            setShowSuccessModal(true); // Show success modal
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setValidationErrors(err.response.data.errors);
                console.log(err.response);

            } else {
                setError('Failed to send message. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        setSuccess('');
    };

    return (
        <div className="container mx-auto mt-20 px-4">
            <div className="border-l-8 border-blue-700 pl-5 mb-5">
                <h6 className="text-blue-700 text-md uppercase">Contact Us</h6>
                <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">Feel free to leave a message</h1>
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-8/12 px-4 mb-8">
                    <div className="bg-stone-50 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        {success && <div className="text-green-500 mb-4">{success}</div>}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <input
                                        className={`form-control w-full p-3 border ${validationErrors.name ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:border-pink-700`}
                                        name="name"
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                    {validationErrors.name && <div className="text-red-500 text-sm mt-1">{validationErrors.name}</div>}
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <input
                                        className={`form-control w-full p-3 border ${validationErrors.email ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:border-pink-700`}
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                    {validationErrors.email && <div className="text-red-500 text-sm mt-1">{validationErrors.email}</div>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <input
                                        className={`form-control w-full p-3 border ${validationErrors.subject ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:border-pink-700`}
                                        name="subject"
                                        id="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter Subject"
                                    />
                                    {validationErrors.subject && <div className="text-red-500 text-sm mt-1">{validationErrors.subject}</div>}
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <textarea
                                        className={`form-control w-full h-40 p-3 border ${validationErrors.message ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:border-pink-700 resize-none`}
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter Message"
                                    ></textarea>
                                    {validationErrors.message && <div className="text-red-500 text-sm mt-1">{validationErrors.message}</div>}
                                </div>
                                <div className="w-full px-2">
                                    <button
                                        type="submit"
                                        className="button bg-blue-700 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-pink-700"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 mb-8">
                    <div className="bg-stone-50 rounded-lg shadow-lg p-6">
                        <div className="space-y-6">
                            <div className="media contact-info flex items-start space-x-4">
                                <span className="contact-info__icon text-2xl text-blue-700">
                                    <i className="ti-home"></i>
                                </span>
                                <div className="media-body">
                                    <h3 className="text-xl font-semibold">Buttonwood, California.</h3>
                                    <p className="text-gray-600">Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info flex items-start space-x-4">
                                <span className="contact-info__icon text-2xl text-blue-700">
                                    <i className="ti-tablet"></i>
                                </span>
                                <div className="media-body">
                                    <h3 className="text-xl font-semibold">+1 253 565 2365</h3>
                                    <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info flex items-start space-x-4">
                                <span className="contact-info__icon text-2xl text-blue-700">
                                    <i className="ti-email"></i>
                                </span>
                                <div className="media-body">
                                    <h3 className="text-xl font-semibold">support@colorlib.com</h3>
                                    <p className="text-gray-600">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <hr className="my-12 border-gray-300" />

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-green-700 mb-4">Success</h2>
                        <p className="text-gray-700 mb-4">Message sent successfully!</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-700 text-white px-6 py-2 rounded-lg focus:outline-none hover:bg-blue-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
