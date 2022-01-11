import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './Components/NavBar';
import Home from './Pages/index';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}
// <App/>