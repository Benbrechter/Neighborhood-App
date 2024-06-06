// links for easy navi

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar">
      <div className="">
        <Link className="" to="/">
          <h1 className="" style={{ fontSize: '3rem' }}>
            Handy Hood
          </h1>
        </Link>
        <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          <a href= '/' className='navUL'>Home</a>
          <a href = '/profile' className='navUL'>Profile</a>
          <a href="/login" className='navUL'> Signup/Login</a>
        </p>
        <p className="" style={{ }}>
            <input type="text" placeholder="Zip Code" title="Please enter your Zip Code"></input>
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;
