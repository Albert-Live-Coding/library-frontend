import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './utils/AppRouter';
import './style/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter} />
);
