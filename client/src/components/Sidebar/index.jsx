// links for easy navi

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <h1 className="" style={{ fontSize: '4rem' }}>
            Handy Hood
          </h1>
        </Link>
        <div className="navbar-links" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/profile" className="nav-item">Profile</Link>
          <Link to="/login" className="nav-item">Signup/Login</Link>
        </div>
        <div className="navbar-search" >
          <input 
            type="text" 
            placeholder="Zip Code" 
            title="Please enter your Zip Code" 
            className="zip-code-input"
          />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
