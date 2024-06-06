import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link className="" to="/">
          <h1 className="" style={{ fontSize: '3rem' }}>
            HandyHood
          </h1>
          <a href="https://flyclipart.com/talk-to-your-mpp-ops-row-of-houses-clipart-255763" title="Talk To Your Mpp Ops - Row Of Houses Clipart"><img src="https://flyclipart.com/thumb2/talk-to-your-mpp-ops-255763.png" width="350" /></a>
        </Link>
        <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          <button>Login/Sign Up</button>
        </p>
      </div>
    </header>
  );
};

export default Header;
