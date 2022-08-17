import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SignleFood.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useCart from '../../Hooks/useCart';
const SignleFood = (props) => {
    const params = useParams();
    const [items,setItems] = useState([]);
   const {handleCart} = props;
   
   const [quantity,setQuantity] = useState(1);

   const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(()=> {
        fetch(`../menus.json`)
        .then(res => res.json())
        .then(data => setItems(data))
        
    },[params.id])
    

    let singleItem = items.find(i => i.key == params.id);
    if(singleItem){
        singleItem.quantity = quantity;
    }
    console.log()
    

    

   
    
    return (
        <Container>
                    <Row className='py-5'>
                        <Col className='single-item-col py-5' >
                           <div className='single-item-content'>
                           <h1>{singleItem?.name}</h1>
                            <p>{singleItem?.description}</p>
                            
                            <div className='d-flex'>
                            <h3 className='px-4'>$ {singleItem?.price}</h3>
                                <div className='quantity-btn'>
                                    <span className='quantity-indicator' onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : quantity = 1)}>-</span>
                                    <span>{quantity}</span>
                                    <span className='quantity-indicator' onClick={()=> setQuantity(quantity < 9 ? quantity + 1 : quantity = 9)}>+</span>
                                </div>
                            </div>
                            <button onClick={() => handleCart(singleItem,quantity)} className='cart-btn'>{shoppingCart} add</button>
                           </div>
                        </Col>
                        <Col className='text-center'>
                            <Image className='singleItemImg' src={singleItem?.img}></Image>
                           
                        </Col>
                     </Row>
               
        </Container>
    );
};

export default SignleFood;