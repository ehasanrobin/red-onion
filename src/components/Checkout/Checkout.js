import React, { useEffect } from 'react';
import img from '../../images/your-order-is-on-the-way.gif'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
const Checkout = () => {
    
    
    return (
        <div className='m-5 container'>
            <h1>Order has been placed</h1>
            <img className='img w-50 m-5' src={img} alt="" />
        </div>
    );
};

export default Checkout;