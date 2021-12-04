import React from 'react';

const Cart = (props) => {
    return (
        <div className="btn btn-primary p-2 m-3">
            Total: {props.cart.length}

        </div>
    );
};

export default Cart;