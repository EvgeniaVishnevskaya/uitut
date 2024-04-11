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
  {route: 'lessons', page: page1},
  {route: 'documentation', page: page2},
  {route: 'contacts', page: page2},
  {
    route: 'lessons/sitemap', page: section1
  },
  {
    route: 'lessons/prototype', page: section2
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


