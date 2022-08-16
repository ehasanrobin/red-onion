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
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);

  const handleCart = (item) => {
    const addToCart = [...cart , item]
    setCart(addToCart);
    console.log(cart);
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
        <Route path='/signlefood/:id' exact element={<SignleFood handleCart={handleCart}></SignleFood>}></Route>
       </Routes>
      
      
      
       <Footer></Footer>
    </>
  );
}

export default App;
