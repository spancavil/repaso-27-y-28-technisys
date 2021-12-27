import { FILTERED_PRODUCTS, GET_PRODUCTS } from "../actions/products.actions";

const initialState = {
    products: [],
    filteredProducts: [],
    selectedProduct: null,
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
            ...state,
            products: action.payload
            }

        case FILTERED_PRODUCTS:
            const productosFiltrados = state.products.filter(product => product.category === action.payload)
            return {
            ...state,
            filteredProducts: productosFiltrados
            }
            
        default:
            return {
                ...state
            }
    }
}

export default ProductsReducer;
