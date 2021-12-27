import { FILTERED_PRODUCTS, GET_PRODUCTS, SELECTED_PRODUCT } from "../actions/products.actions";

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

        case SELECTED_PRODUCT:
            const productSelected = state.products.find(prod => prod.id === action.productId);
            return productSelected ?
            {...state, selectedProduct: productSelected}
            :
            {...state, selected: null}
            
        default:
            return {
                ...state
            }
    }
}

export default ProductsReducer;
