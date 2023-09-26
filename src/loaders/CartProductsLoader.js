// const cartProductsLoader = async()=>{
//         const loadedProduct = await fetch('products.json');
//         const products = await loadedProduct.json();
//         console.log(products);
//         return products;
// }
// export default(cartProductsLoader)

import { getShoppingCart } from "../utilities/fakedb";



const cartProductsLoader = async()=>{
        const loaderProducts = await fetch('products.json')
        const products = await loaderProducts.json()

        // if cart data in database then you have to do async and await

        const storedCart = getShoppingCart();
        const saveCart =[]
        for(const id in storedCart){
                const addedProduct = products.find(pd=>pd.id===id)
                if(addedProduct){
                      const  quantity= storedCart[id];
                      addedProduct.quantity = quantity;
                      saveCart.push(addedProduct);
                }
                
        }

        return saveCart;
}
export default cartProductsLoader