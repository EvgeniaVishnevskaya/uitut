import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,
  RouterProvider } from 'react-router-dom'
import page1 from './pages/page1';
import page2 from './pages/page2';
import index from './pages/index'
const routes = [
  {name: 'index', page: index},
  {name: 'page1', page: page1},
  {name: 'page2', page: page2}
]

function createElement (component) {
  return (<App>{component}</App>)
}

const router = createBrowserRouter(routes.map(route => ({
  path: '/' + (route.name === 'index' ? '' : route.name),
  element: createElement(route.page)
})))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);


