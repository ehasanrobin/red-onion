import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import img from "../../images/breakfast/breakfast1.png"
import './Cart.css'
const Cart = () => {
    return (
        <>
           <Container>
            <Row>
                <Col md={8}>
                
                <Form className='w-80 py-4 m-auto login-form'>
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
                    <div className="cart-item mt-2">
                        <img src={img} alt="" />
                        <div className='cart-content'>
                            <p><b>butter nan</b></p>
                            <p className='price'>$ 30</p>
                            <small>delivery fees</small>
                        </div>
                        <div className='cart-quantity'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </div>
                    <div className="cart-item mt-2">
                        <img src={img} alt="" />
                        <div className='cart-content'>
                            <p><b>butter nan</b></p>
                            <p className='price'>$ 30</p>
                            <small>delivery fees</small>
                        </div>
                        <div className='cart-quantity'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </div>
                 </div>
                 <div className="cart-details">
                    <div className="item-price">
                        <p>Subtotal 4 Items</p>
                        <p>$320</p>
                    </div>
                    <div className="item-price">
                        <p>Tax</p>
                        <p>$10</p>
                    </div>
                    <div className="item-price">
                        <p>Delivery Fees</p>
                        <p>$2</p>
                    </div>
                    <div className="item-price">
                        <p>Total</p>
                        <p>$400</p>
                    </div>
                 </div>
                </Col>
            </Row>
           </Container>
            
        </>
    );
};

export default Cart;