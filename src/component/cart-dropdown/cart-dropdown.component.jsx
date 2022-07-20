import React from 'react';
import './cart-dropdown.style.scss'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className= 'cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem => 
                <CartItem key={CartItem.id} item={cartItem}/>
            ))
            : (
            <span className='empty-message'> Your Cart is Empty </span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            // dispatch
            (toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps,{toggleCartHidden})(CartDropdown));