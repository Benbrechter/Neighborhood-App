import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/">
        {/* <a href='https://postimg.cc/687TK69z' target='_blank'><img src='https://i.postimg.cc/Cx78jd9y/houses.png' border='0' alt='houses'/></a> */}
          {/* <img src='https://i.postimg.cc/Cx78jd9y/houses.png' alt='houses' className="logo" border='0'/> */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
