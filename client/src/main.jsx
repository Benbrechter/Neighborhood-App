import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Loginsignup.jsx'
import Giveaway from './pages/Giveaway.jsx'

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
        path: './items',
        element: <Giveaway/>
      },
      {
        path: '/profiles/:profileId',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)