import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '/src/components/Nav.css'




 function Navebar()
 {
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Nav className="me-auto">
            <h2>My shoping</h2>
          <Link to="/" className="nav"> Home</Link>
          <Link to="cart" className="nav">Cart list</Link>
         
     
          </Nav>
          
        </Container>
      </Navbar>
    
    )

 }
 export default Navebar