import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle , useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../../firebase/firebase.init'

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);

  const login = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
    signInWithEmailAndPassword(email, password)
    navigate(from, { replace: true });
  }
 
    return (
        <section className='login-section'>

            <Container>
                <Row>
                    <Col>
                    <Image></Image>
                    <Form onSubmit={login} className='w-50 py-4 m-auto login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      
      <Button className='form-control' variant="primary" type="submit">
        Sign In
      </Button>
      <div className='text-center pt-4 login-text'>
      <Link as={Link} replace to='/signin' className='m-auto'>don't have an account?</Link>
      </div>
      
    </Form>
    <button className='btn' onClick={() => signInWithGoogle()}>google</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;