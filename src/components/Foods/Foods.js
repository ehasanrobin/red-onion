import React, { useState } from 'react';
import { useEffect } from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap'
import Food from '../Food/Food';
import './Foods.css';
const Foods = () => {
    const [foods,setFoods] = useState(1);
    const [breakfast , setBreakfast] = useState([]);
    const [lunches , setLunches] = useState([]);
    const [dinners , setDinners] = useState([]);

    useEffect(()=> {
        fetch("breakfast.json")
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
    useEffect(()=> {
        fetch("./lunch.json")
        .then(res => res.json())
        .then(data => setLunches(data))
    },[])
    useEffect(()=> {
        fetch("./dinner.json")
        .then(res => res.json())
        .then(data => setDinners(data))
    },[])
    
    return (
        <section>
            <Container>
                <Row>
                  <Col className='text-center py-3 menu-col'>
                    <Button  variant="text" className={foods === 1 && 'active'}  onClick={()=> setFoods(1)}>Breakfast</Button>
                    <Button  variant="text" className={foods === 2 && 'active'} onClick={()=> setFoods(2)}>Lunch</Button>
                    <Button   variant="text" className={foods === 3 && 'active'} onClick={ ()=> setFoods(3)}>Dinner</Button>
                  </Col>  
                </Row>
                {
                    foods === 1 &&  <Row md={3} gap={3}>

                    {breakfast.map(food => <Food food={food}></Food>)}
                    
                </Row>
                }
                {
                    foods === 2 &&  <Row md={3} gap={3}>

                    {lunches.map(food => <Food food={food}></Food>)}
                    
                </Row>
                }
                 {
                    foods === 3 &&  <Row md={3} gap={3}>

                    {dinners.map(food => <Food food={food}></Food>)}
                    
                </Row>
                }
               

            
            </Container>
        </section>
    );
};

export default Foods;