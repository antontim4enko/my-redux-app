import { SET_INPUT_VALUE, SET_CATEGORY } from './../constans/ActionTypes';
export const setInputValue = inputValue => ({
    type: SET_INPUT_VALUE ,
    payload: inputValue
});
export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
});