import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter,
  RouterProvider } from 'react-router-dom'
import { usePages } from './pages';

const routes = usePages()

function createElement (component) {
  return (<App>{component}</App>)
}

const router = createHashRouter(routes.map(route => ({
  path: route.route ,
  element: <App>{route.page}</App>
})))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='h-full w-full'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);


