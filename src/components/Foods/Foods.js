import React, { useState } from 'react';
import { useEffect } from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap'
import Food from '../Food/Food';
import './Foods.css';
const Foods = () => {
    const [foods,setFoods] = useState(1);
    const [breakfast , setBreakfast] = useState([]);
  
    
    useEffect(()=> {
        fetch("menus.json")
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
     const breakfast1 = breakfast.filter(b => b.menu == '1');
     const lunch1 = breakfast.filter(b => b.menu == '2');
     const dinner1 = breakfast.filter(b => b.menu == '3');

    
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

                    {breakfast1.map(food => <Food food={food} key={food.key} ></Food>)}
                    
                </Row>
                }
                {
                    foods === 2 &&  <Row md={3} gap={3}>

                    {lunch1.map(food => <Food food={food} key={food.key}></Food>)}
                    
                </Row>
                }
                 {
                    foods === 3 &&  <Row md={3} gap={3}>

                    {dinner1.map(food => <Food food={food} key={food.key}></Food>)}
                    
                </Row>
                }
               

            
            </Container>
        </section>
    );
};

export default Foods;