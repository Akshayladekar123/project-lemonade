import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);
    return (
        <div class="item">
            <div class="item-image">
                <img src={'https://res.cloudinary.com/www-techis-io/' + cart.image} class="item-image" alt="" />
            </div>
            <div class="item-details">
                <div class="item-name">
                    <p> {cart.name} </p>
                </div>
                <div class="item-price">
                    <p>${cart.price}</p>
                    <div class="number">
                        <span class="minus" onClick={clickMinusCart}>
                            －
                        </span>
                        <span class="count">{quantity}</span>
                        <span class="plus" onClick={clickPlusCart}>
                            +
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
