import React from "react";

import './cart-item.style.scss'

const CartItem =({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
        <div className="itemImg"><img src={imageUrl} alt='item'/></div>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>        
    </div>
)

export default CartItem;