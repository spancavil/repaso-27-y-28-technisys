import { ADD_ITEM, REMOVE_ITEM, CLEAN_CART } from "../actions/cart.actions";

const initialState = {
    cart: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const productoRepetido = state.cart.find(product => product.id === action.product.id)
            return productoRepetido ?
            {...state}
            :
            {...state, cart: [...state.cart, action.product]}
        case REMOVE_ITEM:
            const cartFiltrado = state.cart.filter(product => product.id !== action.productId )
            return {...state, cart: cartFiltrado}
        default:
            return {...state}
    }
}

export default CartReducer