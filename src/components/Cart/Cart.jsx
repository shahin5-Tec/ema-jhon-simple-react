import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart
    
    const {cart} = props;
    console.log(cart);
    
    let totalPrice =0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice +product.price;
        totalShipping =totalShipping+product.shipping;

    }
    // tax-part
    const tax = totalPrice*5/100;
    // grandTotal-part
    const grandTotal = totalPrice+totalShipping+tax;
    
    return (
        <div className='cart'>
              <h2>Order Summery</h2>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price:${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;