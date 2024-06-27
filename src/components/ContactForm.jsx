import React from 'react';

const ContactForm = () => (
    <div className="container mx-auto mt-20 px-4">
        <div className="border-l-8 border-blue-700 pl-5 mb-5">
            <h6 className="text-blue-700 text-md uppercase">Contact Us</h6>
            <h1 className="text-3xl lg:text-4xl uppercase font-bold mb-5">Feel free to leave a message</h1>
        </div>
        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-8/12 px-4 mb-8">
                <div className="bg-stone-50 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
                    <form
                        method="post"
                        id="contactForm"
                        noValidate="novalidate"
                    >
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <input
                                    className="form-control w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-700"
                                    name="name"
                                    id="name"
                                    type="text"
                                    onFocus={(e) => (e.target.placeholder = '')}
                                    onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <input
                                    className="form-control w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-700"
                                    name="email"
                                    id="email"
                                    type="email"
                                    onFocus={(e) => (e.target.placeholder = '')}
                                    onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full px-2 mb-4">
                                <input
                                    className="form-control w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-700"
                                    name="subject"
                                    id="subject"
                                    type="text"
                                    onFocus={(e) => (e.target.placeholder = '')}
                                    onBlur={(e) => (e.target.placeholder = 'Enter Subject')}
                                    placeholder="Enter Subject"
                                />
                            </div>
                            <div className="w-full px-2 mb-4">
                                <textarea
                                    className="form-control w-full h-40 p-3 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-700"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="9"
                                    onFocus={(e) => (e.target.placeholder = '')}
                                    onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                                    placeholder="Enter Message"
                                ></textarea>
                            </div>
                            <div className="w-full px-2">
                                <button
                                    type="submit"
                                    className="button bg-blue-700 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-800"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-8">
                <div className="bg-stone-50  rounded-lg shadow-lg p-6">
                    <div className="space-y-6">
                        <div className="media contact-info flex items-start space-x-4">
                            <span className="contact-info__icon text-2xl text-blue-700">
                                <i className="ti-home"></i>
                            </span>
                            <div className="media-body">
                                <h3 className="text-xl font-semibold text-blue-700">Buttonwood, California.</h3>
                                <p className="text-gray-600">Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="media contact-info flex items-start space-x-4">
                            <span className="contact-info__icon text-2xl text-blue-700">
                                <i className="ti-tablet"></i>
                            </span>
                            <div className="media-body">
                                <h3 className="text-xl font-semibold text-blue-700">+1 253 565 2365</h3>
                                <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info flex items-start space-x-4">
                            <span className="contact-info__icon text-2xl text-blue-700">
                                <i className="ti-email"></i>
                            </span>
                            <div className="media-body">
                                <h3 className="text-xl font-semibold text-blue-700">support@colorlib.com</h3>
                                <p className="text-gray-600">Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Divider */}
        <hr className="my-12 border-gray-300" />
    </div>
);

export default ContactForm;
