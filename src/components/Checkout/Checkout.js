import React from 'react';
import img from '../../images/your-order-is-on-the-way.gif'
const Checkout = () => {
    return (
        <div className='m-5'>
            <img className='img w-50 m-5' src={img} alt="" />
        </div>
    );
};

export default Checkout;