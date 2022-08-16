import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo2.png';
import './Header.css';
const Header = () => {
  const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="#home" as={Link} to='/home' className='logo'><Image  src={logo}></Image></Navbar.Brand>
          <Nav className="ml-auto nav-menu" >
            <Nav.Link as={Link} to='cart'>{cart} </Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link  href="#pricing">
        <Badge pill as={Link} to='signin' >
        Sign In
      </Badge>
      </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;