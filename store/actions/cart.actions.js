export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAN_CART = 'CLEAN_CART'

export const addItem = (producto) => ({
    type: ADD_ITEM,
    product: producto
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    productId: id,
})

export const cleanCart = () => ({
    type: CLEAN_CART,
})