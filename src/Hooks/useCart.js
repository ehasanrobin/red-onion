import React, { useEffect, useState } from 'react';

const useCart = () => {
    const [cart,setCart] = useState([]);
    
    useEffect(() => {
        

    },[cart])
    return [cart,setCart];
};

export default useCart;