import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Main from './Pages/Main.js';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>
  );
}
// <App/>