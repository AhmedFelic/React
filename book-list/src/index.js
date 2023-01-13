import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookInfo from './components/BookInfo';
import BookList from './components/BookList';
import Author from "./components/Author"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList/>
  },{
    path: "/info/:id",
    element: <BookInfo/>
  },{
    path: "author",
    element: <Author/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
