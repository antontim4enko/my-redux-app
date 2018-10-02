import { SET_INPUT_VALUE, SET_CATEGORY, ADD_TODO, DELETE_ITEM, REFRESH_ITEM } from './../constans/ActionTypes';

export const addTodo = (todo) => ({
	type: ADD_TODO,
    payload: todo
});
export const setInputValue = inputValue => ({
    type: SET_INPUT_VALUE ,
    payload: inputValue
});
export const deleteItem = (items) => ({
	type: DELETE_ITEM,
	payload: items
});
export const refreshItem = (items) => ({
	type: REFRESH_ITEM,
	payload: items
});
export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
}); 