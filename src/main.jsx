import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Routine from './components/pages/Routine';
import Help from './components/pages/Help';
import Other from './components/pages/Other';
import Tricks from './components/pages/Tricks';



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Help />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/routine',
        element: <Routine />,
      },
      {
        path: '/other',
        element: <Other />,
      },
      {
        path: '/tricks',
        element: <Tricks />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);