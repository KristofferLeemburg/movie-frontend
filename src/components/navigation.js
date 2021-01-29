import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../images/netflix.png';
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        if (this.state.status !== "transparent") {
          this.setState({ status: "transparent" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (

      <Navbar className="navigation"
        style={{
          transition: "all 0.4s ease",
          backgroundColor:
            this.state.status === "top" ? "transparent" : "black",
          position: "fixed",

        }} expand="lg">
        <Navbar.Brand href="#home"><img src={Logo} alt='img' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="film-nav">Home</Nav.Link>
            <Nav.Link href="/discover" className="film-nav">Discover</Nav.Link>
            <Nav.Link href="/film" className="film-nav">Film</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
