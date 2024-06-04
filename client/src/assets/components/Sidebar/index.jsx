// links for easy navi

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <header className="">
      <div className="">
        <Link className="" to="/">
          <h1 className="" style={{ fontSize: '3rem' }}>
            Navigation
          </h1>
        </Link>
        <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          <button>Home</button>
          <button>Profile</button>
          <button>Yardsale</button>
          <button>Chores</button>
        </p>
        <p className="" style={{ }}>
            <input type="text" placeholder="Zip Code" title="Please enter your Zip Code"></input>
        </p>
      </div>
    </header>
  );
};

export default Header;
