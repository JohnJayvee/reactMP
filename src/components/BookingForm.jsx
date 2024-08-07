import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import ComponentButton from './Button';
import ComponentInput from './Input';
import ComponentTextarea from './Textarea';

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

  const [serviceOptions, setServiceOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const initialized = useRef(false);

  useEffect(() => {
    const fetchServiceOptions = async () => {
      if (!initialized.current) {
        initialized.current = true
        try {
          const response = await axios.get('http://kodegoapi.test/api/services');
          console.log('Full response:', response);
          console.log('Response data:', response.data);

          // Assuming the API response is an object with a 'services' array
          const options = response.data.services.map(service => ({
            value: service.id,
            label: service.name
          }));

          setServiceOptions(options);
        } catch (error) {
          console.error('Error fetching service options:', error);
          toast.error('Failed to load service options.');
        }
      }
    };

    fetchServiceOptions();
  }, []);

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, service: selectedOption ? selectedOption.value : '' });
    setErrors({ ...errors, service: null });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

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
        console.log(error.response);
        toast.error('Please check the form for errors.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
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
                  <ComponentInput
                    id="first-name"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.firstName ? 'border-red-500' : formData.firstName ? 'border-green-500' : 'border-blue-300'}`}
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last Name</label>
                  <ComponentInput
                    id="last-name"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.lastName ? 'border-red-500' : formData.lastName ? 'border-green-500' : 'border-blue-300'}`}
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="position" className="block text-lg font-medium text-gray-700">Position</label>
                  <ComponentInput
                    id="position"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.position ? 'border-red-500' : formData.position ? 'border-green-500' : 'border-blue-300'}`}
                    name="position"
                    type="text"
                    placeholder="Enter your position"
                    value={formData.position}
                    onChange={handleInputChange}
                  />
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="company" className="block text-lg font-medium text-gray-700">Company</label>
                  <ComponentInput
                    id="company"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.company ? 'border-red-500' : formData.company ? 'border-green-500' : 'border-blue-300'}`}
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="phone-number" className="block text-lg font-medium text-gray-700">Phone Number</label>
                  <ComponentInput
                    id="phone-number"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.cellphoneNumber ? 'border-red-500' : formData.cellphoneNumber ? 'border-green-500' : 'border-blue-300'}`}
                    name="cellphoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                    value={formData.cellphoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.cellphoneNumber && <p className="text-red-500 text-xs mt-1">{errors.cellphoneNumber[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <ComponentInput
                    id="email"
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : formData.email ? 'border-green-500' : 'border-blue-300'}`}
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="select-service" className="block text-lg font-medium text-gray-700">Book a Service</label>
                  <Select
                    className={`form-control w-full p-1.5 border rounded-lg focus:outline-none ${errors.service ? 'border-red-500' : formData.service ? 'border-green-500' : 'border-blue-300'}`}
                    name="service"
                    id="select-service"
                    value={serviceOptions.find(option => option.value === formData.service)}
                    onChange={handleSelectChange}
                    options={serviceOptions}
                    isClearable
                  />
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service[0]}</p>}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="target-date" className="block text-lg font-medium text-gray-700">Target Date</label>
                  <ComponentInput
                    className={`form-control w-full p-3 border rounded-lg focus:outline-none ${errors.targetDate ? 'border-red-500' : formData.targetDate ? 'border-green-500' : 'border-blue-300'}`}
                    name="targetDate"
                    type="date"
                    placeholder="Select target date"
                    value={formData.targetDate}
                    onChange={handleInputChange}
                  />
                  {errors.targetDate && <p className="text-red-500 text-xs mt-1">{errors.targetDate[0]}</p>}
                </div>
                <div className="w-full px-2 mb-4">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                  <ComponentTextarea
                    className={`form-control w-full h-40 p-3 border rounded-lg focus:outline-none resize-none ${errors.message ? 'border-red-500' : formData.message ? 'border-green-500' : 'border-blue-300'
                      }`}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    // onFocus={(e) => (e.target.placeholder = '')}
                    // onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                    placeholder="Enter Message"
                  ></ComponentTextarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
                </div>
                <div className="w-full px-2 mb-4">
                  <ComponentButton className='bg-blue-700 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-pink-800'>Submit</ComponentButton>
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
