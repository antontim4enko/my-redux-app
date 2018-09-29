export const addTodo = (todo) => ({
	type: 'ADD_TODO',
	payload: todo
});

export const deleteItem = (items) => ({
	type: 'DELETE_ITEM',
	payload: items
});