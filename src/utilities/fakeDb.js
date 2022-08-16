
const addToDb = (id) => {
    const exist = getDb();
    let shoppingCart = {};
    if(!exist){
        shoppingCart[id] = 1;
    }else{
        shoppingCart = JSON.parse(exist);
        if(shoppingCart[id]){
            shoppingCart[id] = shoppingCart[id] + 1;
        }else{
            shoppingCart[id] = 1;
        }
       
    }

}