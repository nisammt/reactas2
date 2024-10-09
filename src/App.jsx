import React, { useEffect, useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Productinfo from "./components/Productinfo";
import { useNavigate,Link} from "react-router-dom";
function App() {

  let navigate = useNavigate();
   const routeChange =()=>{
    navigate("/productinfo/:productid_id")

   }
  let [product , setProduct]= useState([])

  useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
     .then((res)=>{
      setProduct(res.data)

     })
     .catch((err)=>{
      console.log(err)
     })

  })

 
  return(
    <>
       <Container>
       <Row>
    {product.map((product,index)=>{
       
       return(
          
   <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
   <Card>
     <Card.Img variant="top" src={product.image} />
     <Card.Body>
       <Card.Title>{product.title}</Card.Title>
       <Card.Text>
         {product.description}
         <p>${product.price}</p>
       </Card.Text>
       <Button variant="primary" onClick={routeChange}>View product </Button>
     </Card.Body>
   </Card> 
    </Col>
          
       )

    })}
     </Row>
     </Container>
    </>
   

   )
   
}

export default App
