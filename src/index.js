import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter,
  RouterProvider } from 'react-router-dom'
import Index from './pages/index'
import Docs from './pages/docs'
import Lessons from './pages/lessons';
import Contacts from './pages/contacts';
import Sitemap from './pages/lessons/sitemap';
import Prototype from './pages/lessons/prototype';


const routes = [
  {route: 'index', page: <Index />},
  {route: 'lessons', page: <Lessons />},
  {route: 'documentation', page: <Docs />},
  {route: 'contacts', page: <Contacts />},
  {
    route: 'lessons/sitemap', page: <Sitemap />
  },
  {
    route: 'lessons/prototype', page: <Prototype />
  },

  
]

function createElement (component) {
  return (<App>{component}</App>)
}

const router = createHashRouter(routes.map(route => ({
  path: '/' + (route.route === 'index' ? '' : route.route),
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


