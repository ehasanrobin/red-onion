import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <section className='login-section'>

            <Container>
                <Row>
                    <Col>
                    <Image></Image>
                    <Form className='w-50 py-4 m-auto login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='form-control' variant="primary" type="submit">
        Sign In
      </Button>
      <div className='text-center pt-4 login-text'>
      <Link as={Link} replace to='/signin' className='m-auto'>don't have an account?</Link>
      </div>
    </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;