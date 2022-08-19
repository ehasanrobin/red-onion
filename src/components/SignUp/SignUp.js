import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css'
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const SignIn =   () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  if(user){
  
    return navigate("/", { replace: true });
  }
  const handleRegister =  (event) => {
    event.preventDefault();
    let displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;
  
    if(password === confirm){
      createUserWithEmailAndPassword(email, password);
      displayName();
      
    }
    

  }
    return (
        <section className='login-section'>
            <Container>
                <Row>
                    <Col>
                    
                    <Form onSubmit={handleRegister} className='w-50 py-4 m-auto login-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Your Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="Confirm Password" />
      </Form.Group>
      
      <Button className='form-control' variant="primary" type="submit">
        Register
      </Button>
      <div className='text-center pt-4 login-text'>
      <Link to='/login' className='m-auto'>already have an account?</Link>
      </div>
    </Form>
   
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignIn;