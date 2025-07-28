import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const userEncoded = params.get('user');

    if (token && userEncoded) {
      try {
        const userJson = atob(decodeURIComponent(userEncoded));
        const user = JSON.parse(userJson);

        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to dashboard or home
        navigate('/dashboard');
        window.location.reload();
      } catch (err) {
        console.error('Failed to parse user data:', err);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <p>Redirecting...</p>;
};

export default AuthSuccess;
