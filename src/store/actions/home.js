import * as actionTypes from './actionTypes';

export const toggleImage = () => {
    return {
        type: actionTypes.MY_IMAGE
    }
}

export const toggleParagraph = () => {
    return {
        type: actionTypes.PARAGRAPH
    }
}

export const toggleNav = () => {
    return {
        type: actionTypes.SHOW_NAV
    }
}

export const showSticky = () => {
    return {
        type: actionTypes.SCROLLED__DOWN
    }
}

export const hideSticky = () => {
    return {
        type: actionTypes.SCROLLED__UP
    }
}