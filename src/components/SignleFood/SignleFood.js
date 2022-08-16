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
   const [item,setItem] = useState([]);
   const [cart,setCart] = useCart();
   
   const [quantity,setQuantity] = useState(1);

   const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(()=> {
        fetch(`../menus.json`)
        .then(res => res.json())
        .then(data => setItems(data))
        
    },[params.id])
    

    const signleItem = items.find(i => i.key == params.id);

    const handleCart = (item) => {
        const addToCart = [...cart , item]
        setCart(addToCart);
        console.log(cart);
    }
    
    return (
        <Container>
                    <Row className='py-5'>
                        <Col className='single-item-col py-5' >
                           <div className='single-item-content'>
                           <h1>{signleItem?.name}</h1>
                            <p>{signleItem?.description}</p>
                            
                            <div className='d-flex'>
                            <h3 className='px-4'>$ {signleItem?.price}</h3>
                                <div className='quantity-btn'>
                                    <span className='quantity-indicator' onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : quantity = 1)}>-</span>
                                    <span>{quantity}</span>
                                    <span className='quantity-indicator' onClick={()=> setQuantity(quantity < 9 ? quantity + 1 : quantity = 9)}>+</span>
                                </div>
                            </div>
                            <button onClick={() => handleCart(signleItem)} className='cart-btn'>{shoppingCart} add</button>
                           </div>
                        </Col>
                        <Col className='text-center'>
                            <Image className='singleItemImg' src={signleItem?.img}></Image>
                           
                        </Col>
                     </Row>
               
        </Container>
    );
};

export default SignleFood;