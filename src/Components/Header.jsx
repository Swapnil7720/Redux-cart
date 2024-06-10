import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector( state => state.cart.cart )

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                {" "}
                Home
              </Link>
              <Link className="link" to="/About">
                {" "}
                About
              </Link>
              <Link className="link" to="/todo">
                {" "}
                Todo 
              </Link>
            </Nav>

            <Nav className="ms-auto">
              <Link className="link" to="Checkout">
               Cart  {cartItems.length}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;