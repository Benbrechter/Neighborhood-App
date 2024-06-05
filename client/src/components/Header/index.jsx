import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link className="" to="/">
          <h1 className="" style={{ fontSize: '3rem' }}>
            HandyHood
          </h1>
        </Link>
        <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          <button>Login/Sign Up</button>
        </p>
      </div>
    </header>
  );
};

export default Header;
