import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
  const saveCart = useLoaderData();
  // console.log(cart);
  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className=" mt-24 mb-32 mx-auto ">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <button className="text-white font-semibold bg-yellow-400 w-full mt-3  flex justify-between items-center px-2 rounded p-1">
            <Link to="/checkout">Proceed Checkout </Link>
            <FontAwesomeIcon icon={faCreditCard} />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
