import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../components/Nav.css';



 function Navebar()
 {
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Nav className="me-auto">
          <Link to="/" className="nav">  Home</Link>
          <Link to="cart" className="nav">Cart</Link>
         
     
          </Nav>
        </Container>
      </Navbar>
    
    )

 }
 export default Navebar