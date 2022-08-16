import React, { useEffect, useState } from 'react';

const useCart = (item) => {
    const [cart,setCart] = useState([]);
    
    useEffect(()=> {
        const newCart = [...cart,item];
        setCart(newCart)
    },[item])
    
    return [cart,setCart];
};

export default useCart;