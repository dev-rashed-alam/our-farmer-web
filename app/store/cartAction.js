export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const removeFromCart = (product) => {
    console.log(product)
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    };
}

export const increaseQuantity = (product) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: product
    };
}

export const decreaseQuantity = (product) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: product
    };
}
