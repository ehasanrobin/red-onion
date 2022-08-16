import React from 'react';
import { Col } from 'react-bootstrap';
import './Food.css'
import { Link } from "react-router-dom";

const Food = ({food}) => {
    const {key,id,img,name,price,description} = food;

    return (
        <Col className='single-food'> 
            <Link to={`/signlefood/${key}`} className='food-link'>
            <div className="card m-3 p-3 item-box">
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h2 className='card-title text-capitalize'>{name}</h2>
                                <p className="card-text">{description}</p>
                                <h4>{price}$</h4>
                            </div>
            </div>
            </Link>          
       </Col>
    );
};

export default Food;