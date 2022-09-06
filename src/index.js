import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './styles/index.scss'
import MainPage from './components/pages/MainPage';
import OurCoffee from './components/pages/OurCoffee';
import PleasurePage from './components/pages/PleasurePage';
import SingleCoffeePage from './components/pages/SingleCoffeePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Coffee_app/" element={<MainPage />} />
      <Route path="/Coffee_app/our_coffee" element={<OurCoffee />} />
      <Route path="/Coffee_app/pleasure" element={<PleasurePage />} />
      <Route path="/Coffee_app/:id" element={<SingleCoffeePage />} />
    </Routes>
  </BrowserRouter>
);