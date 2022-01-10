import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './Components/NavBar';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Container>
          <Route exact path="/"/>
          {/* 
          <Route exact path="/" 
            render={(props) => 
              <Welcome {...props}/>
          }/>
          */}
        </Container>
      </Router>
    </div>
  );
}
// <App/>