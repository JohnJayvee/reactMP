import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ComponentButton from '../../components/Button';
import ComponentInput from '../../components/Input';
import ComponentLogo from '../../components/Logo'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/', { replace: true }); // Redirect to home if token exists
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setGeneralError('');

    try {
      const response = await axios.post(
        'http://kodegoapi.test/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
          },
        }
      );

      console.log('Login successful', response);

      if (response.data.token) {
        // Store token based on rememberMe flag
        if (formData.rememberMe) {
          localStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.setItem('token', response.data.token);
        }
        setIsLoggedIn(true); // Update login status
        navigate('/', { replace: true }); // Redirect to home page
      }
    } catch (error) {
      console.error('Login error', error);
      console.log(error.response);

      if (error.response) {
        const errors = error.response.data.errors;
        if (errors) {
          if (errors.email) {
            setEmailError(errors.email[0]);
          }
          if (errors.password) {
            setPasswordError(errors.password[0]);
          }
        } else {
          setGeneralError(error.response.data.message || 'Something went wrong. Please try again.');
        }
      } else {
        setGeneralError('Network error. Please try again later.');
      }
    }
  };

  // Redirect to home if already logged in
  if (isLoggedIn) {
    return null; // Or any loading indicator while redirecting
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <a href='#' className='flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white'>
            <ComponentLogo />
          </a>
        </div>
        <div className='bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg p-8'>
          <h2 className='text-center text-2xl font-bold text-gray-900 dark:text-white'>
            Sign in to your account
          </h2>
          {generalError && <p className='text-red-500 text-center mt-4'>{generalError}</p>}
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Your email
              </label>
              <ComponentInput
                id='email'
                name='email'
                className={`mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${emailError ? 'border-red-500' : formData.email ? 'border-green-500' : 'border-blue-300'}`}
                autoComplete='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder='email@example.com' />
              {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Password
              </label>
              <div className='relative'>
                <ComponentInput
                  id='password'
                  className={`mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${passwordError ? 'border-red-500' : formData.password ? 'border-green-500' : 'border-blue-300'}`}
                  name='password'
                  type={formData.showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder='Password'
                />
                <span
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'
                  onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
                >
                  {formData.showPassword ? <FontAwesomeIcon icon={faEyeSlash} className='hover:text-pink-700' /> : <FontAwesomeIcon icon={faEye} className='hover:text-pink-700' />}
                </span>
              </div>
              {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='rememberMe'
                  type='checkbox'
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900 dark:text-gray-300'>
                  Remember me
                </label>
              </div>
              <div className='text-sm'>
                <a href='#' className='font-medium text-blue-600 hover:text-blue-500'>
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <ComponentButton className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Login</ComponentButton>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Login;
