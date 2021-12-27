import { createStore, combineReducers, applyMiddleware } from "redux";

//Nuestros dos reducers que tendrán la lógica del manejos del store
import CategoryReducer from "./reducers/categories.reducer";
import ProductsReducer from "./reducers/products.reducer";
//(import CartReducer from "./reducers/cart.reducer";

//Thunk para realizar llamadas asíncronas
import thunkMiddleware from "redux-thunk";

//Dev tools para ver los states por consola
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductsReducer,
    // cart: CartReducer,
})

//Nuestro store generado con el RootReducer y nuestro enhancer compuesto con devtools y llamadas asíncronas
export default createStore(RootReducer, composedEnhancer);
