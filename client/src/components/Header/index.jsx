// import { Link } from 'react-router-dom';
import houses from "./houses.png";


const Header = () => {
  return (
    <header className="">
       <img src={houses} alt="houses" />
        <div className="">
        {/* <Link className="" to="/">
        </Link> */}
        <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        </p>
      </div>
    </header>
  );
};

export default Header;
