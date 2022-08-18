import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import img from "../../images/breakfast/breakfast1.png"
import './Cart.css'
const Cart = ({cart}) => {
   
    let total = 0;
    let tax = 0;
    let shipping =0;
    let grandTotal = 0;
    let totalQuantity = 0;
    const [quantity,setQuantity] = useState(1);
    let navigate = useNavigate();
    console.log(quantity);
    
    for(const product of cart){
      totalQuantity = totalQuantity + product.quantity;
        total = total + product.price * product.quantity;
        tax = total * (4/100);
        shipping = total * (7/100);
        grandTotal = total + tax + shipping;
    }
const handleCheckout = (event)=> {
  event.preventDefault();
  navigate("/checkout", { replace: true });

}
    return (
        <>
           <Container>
            <Row>
                <Col md={8}>
                
                <Form onSubmit={handleCheckout} className='w-80 py-4 m-auto login-form'>
                <h2 className='border-bottom py-2 mb-3'>Edit Delivery Details</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Delivery to door" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="R/d no/7" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Flat Suit/Foor" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="name" placeholder="Business Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
       <textarea name="" className='form-control' placeholder='add delivery Instruction' id="" cols="30" rows="3"></textarea>
     </Form.Group>
      <Button className='form-control' variant="primary" type="submit">
        Save & Checkout
      </Button>
      <div className='text-center pt-4 login-text'>
      
      </div>
    </Form>
                </Col>
                <Col md={4}>
                <p><b>From:</b>2no gate chittagong <br /> Ariiving in 20 minutes <br /> 6 no road,captain villa </p>
                 <div className='cart-items'>
                    {
                        cart.map(item =>   <div className="cart-item mt-2">
                        <img src={item?.img} alt="" />
                        <div className='cart-content'>
                            <Link to={`/signlefood/${item.key}`}><p><b>{item?.name}</b></p></Link>
                            <p className='price'>$ {item?.price}</p>
                            <small>delivery fees</small>
                        </div>
                        <div className='cart-quantity'>
                            <span onClick={()=> setQuantity(quantity  - 1)}>-</span>
                            <span oncl>{item.quantity } {} </span>
                            <span onClick={()=> setQuantity(quantity  + 1)}> +</span>
                        </div>
                    </div>)
                    }
                   
                    
                 </div>
                 <div className="cart-details">
                    <div className="item-price">
                        <p>Subtotal {totalQuantity} Items</p>
                        <p>${total}</p>
                    </div>
                    <div className="item-price">
                        <p>Tax</p>
                        <p>${tax}</p>
                    </div>
                    <div className="item-price">
                        <p>Delivery Fees</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>
                    <div className="item-price">
                        <p>Total</p>
                        <p><b>${grandTotal.toFixed(2)}</b></p>
                    </div>
                 </div>
                </Col>
            </Row>
           </Container>
            
        </>
    );
};

export default Cart;