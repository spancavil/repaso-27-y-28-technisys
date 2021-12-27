export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const FILTERED_PRODUCTS = "FILTERED_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const selectedProduct = (id) => ({
    type: SELECTED_PRODUCT,
    productId: id
})

export const filterProducts = (catId) => ({
    type: FILTERED_PRODUCTS,
    payload: catId,
})

//Esta es la acción de obtener los productos
export const getProducts = async (dispatch) => {
    try{
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        console.log(data);
        dispatch ({
            type: GET_PRODUCTS,
            payload: data
        })
    }
    catch(e){
        dispatch( {
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }
}