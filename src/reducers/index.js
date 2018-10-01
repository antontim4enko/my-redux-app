import { combineReducers } from 'redux';
import items from './itemsReducer';
import input from './inputReducer';


export default combineReducers({
	items,
	input
});