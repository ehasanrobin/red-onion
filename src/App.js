import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignIn from './components/SignUp/SignUp';
import SignleFood from './components/SignleFood/SignleFood';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from './utilities/fakeDb';


function App() {
  const [cart,setCart] = useState([]);
  const [products, setProducts] = useState([]);
 
  useEffect(()=> {
    fetch("../menus.json")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
  
useEffect(()=> {
    const savedCart = getStoredCart();
    let addedCart = [];
    for(const id in savedCart){
      
      let addedProduct = products.find(p => p.key == id);
      if(addedProduct){
       addedProduct.quantity = savedCart[id];
       addedCart.push(addedProduct);
      
      }
      setCart(addedCart);
      
    }
},[products])

  const handleCart = (item,quantity) => {
    item.quantity = quantity;
    const addToCart = [...cart , item];
    let cartItems = cart.find(p => p.key == item.key);
    
    if(cartItems == true){
      setCart(addToCart);
    }else{
     const rest = cart.filter(p => p.key !== item.key);
     
    const newCart = [...rest,item];
    setCart(newCart);

    }
    
    
    addToDb(item.key,quantity)
}
  return (
    <>
       <Header cart={cart}></Header>
       <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/home' exact element={<Home cart={cart}></Home>}></Route>
        <Route path='/login' exact element={<Login></Login>}></Route>
        <Route path='/signin' exact element={<SignIn></SignIn>}></Route>
        <Route path='/cart' exact element={<Cart cart={cart}></Cart>}></Route>
        <Route path='/signlefood/:id' exact element={<SignleFood handleCart={handleCart} ></SignleFood>}></Route>
       </Routes>
      
      
      
       <Footer></Footer>
    </>
  );
}

export default App;
