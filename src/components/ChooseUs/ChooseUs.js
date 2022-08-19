import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import fastDelivery from '../../images/adult-blur-blurred-background-687824.png'
import cheif from '../../images/chef-cook-food-33614.png'
import architecture from '../../images/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus,faTruck,faBell } from '@fortawesome/free-solid-svg-icons'
import './ChooseUs.css'


const ChooseUs = () => {
    const bus = <FontAwesomeIcon icon={faBus} />
    const truck = <FontAwesomeIcon icon={faTruck} />
    const bell = <FontAwesomeIcon icon={faBell} />
    return (
        <section className='py-4'>
            <Container>
                <Row md={2}>
                    <Col>
                        <h3>Why choose us</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos explicabo veritatis velit suscipit repudiandae optio laudantiu</p>
                    </Col>
                </Row>
                <Row md={2} lg={3}>
                    <Col className='align-self-start'>
                        <Image src={fastDelivery}></Image>
                        <div className='choose-content pt-4'>
                            <div className="icon">
                                {
                                    bus
                                }
                            </div>
                            <div className="desc">
                                <h5>fast delivery</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat enim beatae dolorem fuga in minima, error assumenda iste nostrum!</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Image src={cheif}></Image>
                        <div className='choose-content pt-4'>
                            <div className="icon">
                                {
                                    bell
                                }
                            </div>
                            <div className="desc">
                                <h5>fast delivery</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat enim beatae dolorem fuga in minima, error assumenda iste nostrum!</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Image src={architecture}></Image>
                        <div className='choose-content pt-4'>
                            <div className="icon">
                                {truck }
                            </div>
                            <div className="desc">
                                <h5>fast delivery</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat enim beatae dolorem fuga in minima, error assumenda iste nostrum!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChooseUs;