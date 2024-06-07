import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="">
//       <div className="">
//         <Link className="" to="/">
//         <a href='https://postimg.cc/687TK69z' target='_blank'><img src='https://i.postimg.cc/Cx78jd9y/houses.png' border='0' alt='houses'/></a>        </Link>
//         <p className="" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//         </p>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/">
          <img src='https://i.postimg.cc/Cx78jd9y/houses.png' alt='houses' className="logo" />
        </Link>
        <p className="title">Home</p>
      </div>
    </header>
  );
};

export default Header;
