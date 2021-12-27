export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

//ACCION ASYNC
export const getCategories = async (dispatch) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_CATEGORIES_ERROR,
            payload: error.message,
        })
    }
}