import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <h2>Task2 App</h2>
      <Link to="/signin" style={{ marginRight: '10px' }}>Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default Navbar;
