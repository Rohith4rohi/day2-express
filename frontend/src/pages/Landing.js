import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Task2 App</h1>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Please choose an option to get started
      </p>
      <div>
        <button 
          onClick={() => navigate('/signup')} 
          style={{ 
            marginRight: '20px', 
            padding: '12px 24px', 
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
        <button 
          onClick={() => navigate('/signin')}
          style={{ 
            padding: '12px 24px', 
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
      </div>
    </div>
  );
}

export default Landing;
