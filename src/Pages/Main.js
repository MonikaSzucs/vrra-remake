import React from 'react';
import { Route , Router, Routes, Switch} from "react-router-dom";
import {
    Button,
    Container
} from 'react-bootstrap';
import Home from './Home.js';
import Store from './Store.js';
import About from './About.js';

export default function Main() {
    return (
        <div>
            <Route>
                <Route path="/" exact render={props => <Home/>} />
                <Route path="/Store"  render={props => <Store/>} />
                <Route path="/About"  render={props => <About/>} />
            </Route>
        </div>
    )
}
// Home