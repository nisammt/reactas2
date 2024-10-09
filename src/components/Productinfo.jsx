import React,{useEffect,useState} from "react";
import axios from "axios";

import { useParams } from 'react-router-dom';


function Productinfo(){
   
    console.log(useParams())


    
     let [product, setProduct]= useState({})
       

    useEffect(()=>{
        
        axios.get('https://fakestoreapi.com/products/1')
             .then((res)=>{
               setProduct(res.data)
            
             })
             .catch((err)=>{
                alert("something went wrong");
             })

    },[])

   return(
    <>
    <img src={product.image} style ={{width:"300px"}}/>
    <h2>{product.title}</h2>
     <h5>$ {product.price}</h5>
     <p>{product.description}</p>



    </>
   )
}
export default Productinfo