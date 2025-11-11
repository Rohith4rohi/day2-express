// frontend/src/pages/SignIn.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Signin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('/users/signin', form);
      console.log(res.data); // should show { user, token }
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Task2 App</h1>
        <h2>Sign In</h2>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <input 
          name="email" 
          placeholder="Email" 
          type="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
          style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input 
          name="password" 
          placeholder="Password" 
          type="password" 
          value={form.password} 
          onChange={handleChange} 
          required 
          style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '12px', 
            fontSize: '16px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Sign In
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Don't have an account? 
          <button 
            onClick={() => navigate('/signup')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#007bff', 
              cursor: 'pointer', 
              textDecoration: 'underline',
              marginLeft: '5px'
            }}
          >
            Sign Up
          </button>
        </p>
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            background: 'none', 
            border: '1px solid #ddd', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Signin;
