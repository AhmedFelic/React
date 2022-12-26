import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movies from './Components/Movies';
import Series from './Components/Series';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies/>,
  },
  {
    path: "series",
    element: <Series/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
