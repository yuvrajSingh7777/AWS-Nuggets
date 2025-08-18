import React, { useState } from 'react';
import { X } from 'react-feather';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-33.9-4.7-50.2H272v95.1h146.9c-6.3 34.1-26.3 63-56.3 82.4v68.2h90.9c53-48.8 83.3-120.6 83.3-195.5z" />
    <path fill="#34A853" d="M272 544.3c75.6 0 139.1-25 185.5-67.9l-90.9-68.2c-25.2 17-57.5 27-94.6 27-72.7 0-134.4-49-156.5-114.7H22.7v71.9c46.1 91.1 140.2 151.9 249.3 151.9z" />
    <path fill="#FBBC05" d="M115.5 321.5c-10.5-31.6-10.5-65.8 0-97.4v-71.9H22.7c-39.5 77.3-39.5 169.7 0 247l92.8-77.7z" />
    <path fill="#EA4335" d="M272 107.7c39.6 0 75.2 13.7 103.4 40.7l77.5-77.5C409.8 24.5 345.4 0 272 0 162.8 0 68.7 60.7 22.7 151.8l92.8 71.9c22.1-65.6 83.8-114.7 156.5-114.7z" />
  </svg>
);
const SignUpForm = ({ onClose }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (formData.password !== formData.confirm_password) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 201) {
        const { token, user } = res.data;

        // ✅ Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setMessage('✅ Registered successfully!');

        navigate('/');
        window.location.reload();
      } else {
        setMessage('Something went wrong!');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

 const handleGoogleSignUp = () => {
  window.location.href = `/api/auth/google`;
};


  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/20 flex justify-center items-center z-[100]">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-md relative animate-zoom-in">
        <button
          onClick={() => { navigate('/') }}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 dark:hover:text-blue-300 dark:text-gray-50 hover:text-gray-800 transition"
          aria-label="Close sign up form"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-500 mb-4 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium dark:text-gray-50 text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium dark:text-gray-50 text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block dark:text-gray-50 text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm_password" className="block dark:text-gray-50 text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 cursor-pointer text-white py-2 px-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center font-medium text-sm text-red-500 dark:text-red-400">{message}</p>
        )}

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 dark:text-gray-400 font-semibold">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full border cursor-pointer dark:text-gray-50 dark:hover:text-gray-700 border-gray-300 rounded-md py-2 px-3 flex justify-center items-center font-semibold text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          type="button"
        >
          <GoogleIcon />
          Sign up with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <a href="#" onClick={() => { navigate('/signin') }} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400">
            Sign In
          </a>
        </p>
      </div>
    </div>

  );
};

export default SignUpForm;
