import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Banner.css'
const Banner = () => {
    return (
        <section className='banner-section'>
            <div className="container">
                <div className="col-12">
                    <h1>best food waiting for your belly</h1>
                    <InputGroup className="mb-3 search-group" >
        <Form.Control
          placeholder="Search Food Item"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>
                </div>
            </div>
        </section>
    );
};

export default Banner;