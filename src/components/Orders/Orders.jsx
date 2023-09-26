import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    // console.log(cart);
    const [cart,setCart]=useState(saveCart);

    const handleRemoveFromCart =(id)=>{
        // console.log(id);
        const remaining = cart.filter(pd=>pd.id!==id)
        setCart(remaining);
        removeFromDb(id);
    }

    
    return (
        <div className='shop-container'>
            <div className=' mt-24 mb-32 mx-auto '>
                    {
                        cart.map(product=><ReviewItem
                        key={product.id}
                        product= {product}
                        handleRemoveFromCart={handleRemoveFromCart}
                        />)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Orders;

