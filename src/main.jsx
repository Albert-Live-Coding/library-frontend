import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { AppRouter } from './utils/AppRouter';
import './style/main.scss';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <AppRouter /> */}
  <App />
  </BrowserRouter>
);
