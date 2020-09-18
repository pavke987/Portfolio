import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    displayParagraph: false,
    displayImg: false,
    button: false,
    scrolled: false
};
const reducer = (state = initialState, action) => {
    switch(action.type) {   
        case actionTypes.PARAGRAPH: return updateObject(state, { displayParagraph: !state.displayParagraph})
        case actionTypes.MY_IMAGE: return updateObject(state, {displayImg: !state.displayImg})
        case actionTypes.SHOW_NAV: return updateObject(state, {button: !state.button})
        case actionTypes.SCROLLED__DOWN: return updateObject(state, {scrolled: true});
        case actionTypes.SCROLLED__UP: return updateObject(state, {scrolled: false});
        default: return state;
    }
};

export default reducer;
