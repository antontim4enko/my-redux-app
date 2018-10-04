import { SET_CATEGORY, ADD_TODO, DELETE_ITEM, REFRESH_ITEM, CHECKBOX_TOGGLE } from './../constans/ActionTypes';



export const addTodo = (todo) => ({
	type: ADD_TODO,
    payload: todo
});
export const deleteItem = (id) => ({
	type: DELETE_ITEM,
	payload: id
});
export const refreshItem = (oldText, newText) => ({
	type: REFRESH_ITEM,
	payload: {
		oldText,
		newText
	}
});
export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
}); 
export const checkboxToggle = id => ({
	type: CHECKBOX_TOGGLE,
	payload: id
});
