import { GET_CATEGORIES } from "../actions/categories.actions";

const initialState = {
    categories: [],
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, categories: action.payload}    
        default:
            return {...state}
    }
}

export default CategoryReducer;