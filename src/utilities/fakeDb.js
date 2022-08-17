// use local storage as your db for now
const addToDb = (id,quantity) => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
      shopping_cart[id] = quantity;
    }
    else {
      shopping_cart = JSON.parse(exists);
      shopping_cart[id] = quantity;
     
    }
    updateDb(shopping_cart);
  }
  
  const getDb = () => localStorage.getItem('menu-cart');
  const updateDb = cart => {
    localStorage.setItem('menu-cart', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('menu-cart');
  }
  
  
  export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
  