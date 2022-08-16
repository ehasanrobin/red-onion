import React from 'react';
import './Footer.css'
import { faFacebook,faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../images/logo2.png'
const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div>
            <div className="footer bg-dark">
            <div className="container">     
                <div className="row row-cols-md-3">       
                <div className="col">
                    <div>
                    <img src={logo} className='logo' style={{maxWidth :'240px'}} alt="" />
                    </div>
                    </div>                
                    <div className="col">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#">{facebook}</a></li>
                                <li><a href="#">{instagram}</a></li>
                                <li><a href="#">{google}</a></li>
                               
                            </ul>
                        </div>                          
                    </div>        */}
                </div>
                <hr style={{color: '#fff'}} className='pt-4 pb-4' />
                <div className="row">
                    <div className="col">
                        <p className="copyright">Copyright © Ehasan  <a href="#">RObin</a>.</p>
                    </div>  
                    <div className="col text-right footer-links">
                        <a href=""> privacy</a>
                        <a href=""> term of use</a>
                        <a href=""> pricing</a>
                    </div>             
                </div>         
            </div>
        </div>
        </div>
    );
};

export default Footer;