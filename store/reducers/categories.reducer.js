import { GET_CATEGORIES, SELECT_CATEGORY } from "../actions/categories.actions";

const initialState = {
    categories: [],
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, categories: action.payload}

        case SELECT_CATEGORY:
            const categorySelected = state.categories.find(cat => cat === action.categoryId)
            return categorySelected ? 
            {...state, selected: categorySelected}
            :
            {...state, selected: null}

        default:
            return {...state}
    }
}

export default CategoryReducer;