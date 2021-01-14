import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Navigation />
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
