import React, { useEffect, useState } from 'react';

const useProdcuts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:5000/menus")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    return [products];
};

export default useProdcuts;