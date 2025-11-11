// frontend/src/pages/Home.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/signin');

    API.get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/signin');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (!user) return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <p style={{ fontSize: '18px' }}>Loading...</p>
    </div>
  );

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Task2 App</h1>
        <h2 style={{ color: '#28a745', marginBottom: '10px' }}>Welcome {user.name}!</h2>
      </div>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '30px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{ marginTop: '0', color: '#495057' }}>Your Profile</h3>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong>Name:</strong> {user.name}
        </p>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={handleLogout}
          style={{ 
            padding: '12px 24px', 
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;
