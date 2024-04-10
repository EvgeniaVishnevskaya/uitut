import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter,
  RouterProvider } from 'react-router-dom'
import page1 from './pages/page1';
import page2 from './pages/page2';
import index from './pages/index'
import section1 from './pages/section1';
import section2 from './pages/section2';

const routes = [
  {route: 'index', page: index},
  {route: 'page1', page: page1},
  {route: 'page2', page: page2},
  {
    route: 'page2/section1', page: section1
  },
  {
    route: 'page2/section2', page: section2
  },
  
]

function createElement (component) {
  return (<App>{component}</App>)
}

const router = createHashRouter(routes.map(route => ({
  path: '/' + (route.route === 'index' ? '' : route.route),
  element: createElement(route.page)
})))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);


