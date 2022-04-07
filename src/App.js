import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';

import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Main from './Pages/Main.js';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <BrowserRouter>
      <SubHeader/>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}
// <App/>