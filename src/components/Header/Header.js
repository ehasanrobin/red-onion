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
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
const Header = ({cart}) => {
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
  const [user] = useAuthState(auth);
 
    return (
        <>
            <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="#home" as={Link} to='/home' className='logo'><Image  src={logo}></Image></Navbar.Brand>
          <Nav className="ml-auto nav-menu" >

          
          
            <Nav.Link as={Link} to='cart'>{shoppingCart} {cart.length} <span></span> </Nav.Link>
            {
            user ?  <Nav.Link as={Link} onClick={()=> signOut(auth)} to="">logout</Nav.Link>
            : <><Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to='signin'>
        <Badge pill  >
        Sign Up
      </Badge>
      </Nav.Link></>
          }
       {
            user &&  <Nav.Link as={Link} to='cart'>welcome,<b>{user?.displayName}</b> <span></span> </Nav.Link>
          }     
          {
            user && <img className='profileImg' src={user.photoURL}/>
          }
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;