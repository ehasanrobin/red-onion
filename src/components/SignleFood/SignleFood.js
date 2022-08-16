import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
const SignleFood = (props) => {
    const params = useParams();
    const [items,setItems] = useState([]);
   const [item,setItem] = useState([]);
    useEffect(()=> {
        fetch(`../breakfast.json`)
        .then(res => res.json())
        .then(data => setItems(data))
        
    },[params.id])
    const singleItem =  items.find(item => item.key = params.id);
    setItem(singleItem);
     
    console.log(item)
    return (
        <Container>
                    <Row>
                        <Col>
                           <div>
                           <h1>{item?.name}</h1>
                            <p>{}</p>
                            <h3>{}</h3>
                            <button>add To Cart</button>
                           </div>
                        </Col>
                        <Col>
                            <Image src=''></Image>
                           
                        </Col>
                     </Row>
               
        </Container>
    );
};

export default SignleFood;