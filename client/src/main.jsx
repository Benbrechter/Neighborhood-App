import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Loginsignup'
import AddPost from './pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:  <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/add-post',
        element: <AddPost />, // Add route for AddPost
      },
    ],
  },
]);

const Navbar = () => {
  return (
    <nav
    className = { moduleStyles.navbar }
  >
    <h3>
      Hello
    </h3>
    <ul
      className = { moduleStyles.nList }
    >
      <li
        className = { moduleStyles.nlItem }
      > 
        <Link
          href = "/"
        >
          <a
            className = { moduleStyles.nliLink }
          >
            Home
          </a>
        </Link>
      </li>
      <li
        className = { moduleStyles.nlItem }
      >
        <Link
          href = "/"
        >
          <a
            className = { moduleStyles.nliLink }
          >
            Home
          </a>
        </Link>
      </li>
      <li
        className = { moduleStyles.nlItem }
      >
        <Link
          href = "/"
        >
          <a
            className = { moduleStyles.nliLink }
          >
            Home
          </a>
        </Link>
      </li>
    </ul>
    <button>
      Login
    </button>
  </nav>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
