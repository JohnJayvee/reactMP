import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import LoginInput from '../../components/LoginInput';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        const token = localStorage.getItem('token');
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

        const payload = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                'http://kodegoapi.test/api/login',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            console.log('Login successful', response);

            if (response.data.token) {
                // Store token in localStorage
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true); // Update login status
                navigate('/', { replace: true }); // Redirect to home page
            }
        } catch (error) {
            console.error('Login error', error);

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
                        <FontAwesomeIcon className='text-pink-700 mr-2' icon={faUserGraduate} />
                        Kodego College
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
                            <LoginInput id='email'
                                name='email'
                                autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='email@example.com' />
                            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                                Password
                            </label>
                            <LoginInput id='password'
                                name='password'
                                type='password'
                                autoComplete='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password' />
                            {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='remember-me'
                                    name='remember-me'
                                    type='checkbox'
                                    className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
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
                            <Button>Login</Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;