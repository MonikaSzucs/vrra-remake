import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './Components/NavBar';
import Home from './Pages';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Container>
          <Route exact path="/"
            render={(props) => 
              <Home {...props}/>
          }/>
        </Container>
      </Router>
    </div>
  );
}
// <App/>