import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ideas: null,
    categories: null
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.IDEAS:      
        return {
            ...state,
            ideas: action.ideas
        };
        case actionTypes.DELETE:
           const newIdeas = [...state.ideas] 
           newIdeas.splice(action.index, 1)
           return {
               ...state,
               ideas: newIdeas
           };
        case actionTypes.EDIT:
           const copiedIdeas = [...state.ideas]
           copiedIdeas.splice(action.Index, 1, action.newIdea)
           return {
               ...state,
               ideas: copiedIdeas
           };
        case actionTypes.CATEGORIES:
            return {
                ...state,
                categories: action.categories 
            };
        case actionTypes.ADD_CATEGORY: 
            return {
                ...state,
                categories: state.categories.concat(action.newCategory)
            };
        case actionTypes.DELETE_CATEGORY:
            const copiedCategories = [...state.categories]
            copiedCategories.splice(action.index, 1)
            return {
                ...state,
                categories: copiedCategories
            }           
        default: return state;
    };
   
};

export default reducer;