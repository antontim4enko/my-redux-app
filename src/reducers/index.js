const initialState = {
	 items: [
		{
			id: 122467654,
			text: "Make todo app"
		},
		{
			id: 14447799,
			text: "With Redux.js"
		}
	]
}

function rootReducer(state = initialState, action) {
	switch(action.type){
		case 'ADD_TODO' :
			return {
				items: [
					...state.items, action.payload
				]
			}
		default :	
			return state;
	}		
}

export default rootReducer;