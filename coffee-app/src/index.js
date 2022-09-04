import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './styles/index.scss'
import App from './components/app/app';
import OurCoffee from './components/pages/OurCoffee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/our_coffee" element={<OurCoffee />} />
    </Routes>
  </BrowserRouter>
);

