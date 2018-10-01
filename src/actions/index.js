import { SET_INPUT_VALUE } from './../constans/ActionTypes';
export const setInputValue = inputValue => ({
    type: SET_INPUT_VALUE ,
    payload: inputValue
});