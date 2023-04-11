import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("jobs.json"),
        // loader: ()=>fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-IsmatJahanBijori/main/public/featured.json?token=GHSAT0AAAAAACARNWKBA3VAQAPYWHIESQNYZBULRDQ')
        loader: ()=>fetch('featured.json')
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-IsmatJahanBijori/main/public/featured.json/${params.id}`),
        loader: ({params})=>fetch('/featured.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
