import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SignleFood.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useProdcuts from '../../Hooks/useProdcuts';

const SignleFood = (props) => {
    const params = useParams();
    const [products] = useProdcuts();
   const {handleCart} = props;
   
   const [quantity,setQuantity] = useState(1);

   const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

 
    

    let singleItem = products.find(i => i._id == params.id);
    if(singleItem){
        singleItem.quantity = quantity;
    }
    
    
    return (
        <Container>
                    <Row className='py-5 single-item-row' md={2} xs={1}>
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