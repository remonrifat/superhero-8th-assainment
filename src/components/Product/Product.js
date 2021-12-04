import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { Name, img } = props.product;
    return (
        <div className="product">
            <h4>{Name}</h4>
            <img className="rounded border border-primary" src={img} alt="" />
            <button className="btn btn-primary m-3" onClick={() => props.handleCart(props.product)}>Hire Me</button>
        </div>
    );
};

export default Product;