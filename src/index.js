import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './layouts/LandingPage';
import SearchCar from './layouts/SearchCar';
import  Button  from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/react' element={<App/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/search-car' element={<SearchCar/>}></Route>
      <Route path='/button' element={<Button/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
