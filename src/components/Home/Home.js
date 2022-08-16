import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Foods from '../Foods/Foods';

const Home = ({cart}) => {
    console.log(cart);
    return (
        <>
            <Banner></Banner>
            <Foods cart={cart}></Foods>
            <ChooseUs></ChooseUs>
        </>
    );
};

export default Home;