import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  useEffect(()=>{
    const storedCart = getShoppingCart();
    const saveCart = [];
  
    //get the id 
    for(const id in storedCart){
      //get product from products state by using id
      const addedProduct = products.find(product=>product.id===id);
    if(addedProduct){
      //step:3 add the quantity
      const quantity=storedCart[id];
      addedProduct.quantity=quantity;
      //added the addedproduct to the savecart
      saveCart.push (addedProduct)
    }
      // console.log("added product",addedProduct);
      //set the cart
      setCart(saveCart)
    }
  },[products])
  const handleToCart = (product) => {
    // console.log(product);
    let newCart = [];
    // const newCart = [...cart, product];
    //if the product doesnot exists in the cart then we set the qunatity = 1;
    //and if the producut exists the update the quantity
    const exist = cart.find(pd=>pd.id===product.id);
    if(!exist){
      product.quantity = 1;
     newCart = [...cart,product]
    }
    else{
      exist.quantity = exist.quantity+1;
      const remaining = cart.filter(pd=>pd.id!==product.id)     
       newCart = [...remaining,exist]
    }
    
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  }
  

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleToCart={handleToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart
         cart={cart}
         handleClearCart = {handleClearCart} 
        > 
           <button className="text-white font-semibold bg-yellow-400 w-full mt-3  flex justify-between items-center px-2 rounded p-1">
           <Link to="/order">
           Order Review
           </Link>
           <FontAwesomeIcon icon={faArrowRight} />
           </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
