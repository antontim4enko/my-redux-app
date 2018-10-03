import { combineReducers } from 'redux';
import items from './itemsReducer';
import input from './inputReducer';
import category from './categoryReducer';

export default combineReducers({
	items,
	input,
	category
}); 

