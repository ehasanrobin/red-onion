import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo2.png';
import './Header.css';
import useCart from '../../Hooks/useCart';


const Header = ({cart}) => {
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
  
 let quantity = 0;
  for(const product of cart){
     quantity = quantity +  product.quantity;
    
  }
    
    
    return (
        <>
            <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="#home" as={Link} to='/home' className='logo'><Image  src={logo}></Image></Navbar.Brand>
          <Nav className="ml-auto nav-menu" >
            <Nav.Link as={Link} to='cart'>{shoppingCart} {quantity}  <span></span> </Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to='signin'>
        <Badge pill  >
        Sign Up
      </Badge>
      </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;