import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart
    
    const {cart} = props;
    console.log(cart);
    
    let totalPrice =0;
    let totalShipping = 0;
    let quantity =0;
    for(const product of cart){
        // if(product.quantity===0){
        //     quantity = quantity+1;
        // }
        totalPrice = totalPrice +product.price *product.quantity;
        totalShipping =totalShipping+product.shipping;
        quantity = quantity+product.quantity;
    }
    // tax-part
    const tax = totalPrice*5/100;
    // grandTotal-part
    const grandTotal = totalPrice+totalShipping+tax;
    
    return (
        <div className='cart '>
              <h2 className='font-semibold text-lg'>Order Summery</h2>
              
              <p >Selected Items:{quantity}</p>
                <p>Total Price:${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='text-xs pt-3 font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;