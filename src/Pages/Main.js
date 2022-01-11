import React from 'react';
import { Route , Router, Routes, Switch} from "react-router-dom";
import {
    Button,
    Container
} from 'react-bootstrap';
import Home from './Home/Home.js';

export default function Main() {
    return (
        <div>
            <Route>
                <Route path="/"  render={props => <Home/>} />
            </Route>
        </div>
    )
}
// Home