import React, { useEffect, useState } from 'react';
import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [product, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('tools.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleCart = (member) => {
        setCart([...cart, member])
    }
    return (
        <div className="shop-container">

            <div className="product-container">


                {
                    product.map(product => <Product product={product} handleCart={handleCart}></Product>)
                }

            </div>
            <div className="cart-container ">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;