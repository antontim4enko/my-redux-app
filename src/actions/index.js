<<<<<<< HEAD
import { SET_INPUT_VALUE, SET_CATEGORY, ADD_TODO, DELETE_ITEM, REFRESH_ITEM, CHECKBOX_TOGGLE } from './../constans/ActionTypes';
=======
import { SET_INPUT_VALUE, SET_CATEGORY, ADD_TODO, DELETE_ITEM, REFRESH_ITEM } from './../constans/ActionTypes';
import { SET_INPUT_VALUE, SET_CATEGORY } from './../constans/ActionTypes';
>>>>>>> 15c8822b0a7741aa34638d941ab1f75a24496713

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
<<<<<<< HEAD
export const checkboxToggle = items => ({
	type: CHECKBOX_TOGGLE,
	payload: items
})
=======
export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
});
>>>>>>> 15c8822b0a7741aa34638d941ab1f75a24496713
