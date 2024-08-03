import axios from 'axios';
import types from './types';

// Action creator to add an item to the cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        // Fetch product details from the server
        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);

        // Dispatch action to add item to the cart
        dispatch({
            type: types.CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

        // Save cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.error('Failed to add item to cart:', error.response ? error.response.data : error.message);
    }
};

// Action creator to remove an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
    try {
        // Dispatch action to remove item from the cart
        dispatch({
            type: types.CART_REMOVE_ITEM,
            payload: id
        });

        // Save updated cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.error('Failed to remove item from cart:', error.response ? error.response.data : error.message);
    }
};

// Action creator to save the shipping address
export const saveShippingAddress = (data) => (dispatch) => {
    try {
        // Dispatch action to save shipping address
        dispatch({
            type: types.CART_SAVE_SHIPPING_ADDRESS,
            payload: data
        });

        // Save shipping address to local storage
        localStorage.setItem('shippingAddress', JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save shipping address:', error.response ? error.response.data : error.message);
    }
};

// Action creator to save the payment method
export const savePaymentMethod = (data) => (dispatch) => {
    try {
        // Dispatch action to save payment method
        dispatch({
            type: types.CART_SAVE_PAYMENT_METHOD,
            payload: data
        });

        // Save payment method to local storage
        localStorage.setItem('paymentMethod', JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save payment method:', error.response ? error.response.data : error.message);
    }
};

// Action creator to clear the cart
export const clearCart = () => {
    return {
        type: types.CART_CLEAR
    };
};
