const addToDb = (id) =>{

    let shoppingCart;
  
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
      shoppingCart = JSON.parse(storedCart);
    }
    else{
      shoppingCart = {}
    }
  
  
  
      const quantity  = shoppingCart[id]
    //  quantity  = localStorage.getItem(id)
      if(quantity){
          // console.log('already exists')
          const newQuantity = quantity+1
          shoppingCart[id] = newQuantity
          // localStorage.setItem(id,newQuantity)
      }
      else{
          shoppingCart[id] = 1
          // console.log('new item added')
          // localStorage.setItem(id,1)
      }
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      
  }
  const removeFromDb = id =>{
    // console.log('remove',id)
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
      const shoppingCart = JSON.parse(storedCart)
      if(id in shoppingCart){
        // console.log('yes, it is in the local storage')
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      
      }
    }
  }
  
  const getShoppingCart = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
  }
  
  const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
  }
  export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
  };
  