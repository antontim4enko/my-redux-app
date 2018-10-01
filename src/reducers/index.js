import { combineReducers } from 'redux';
import items from './itemsReducer';
import user from './userReducer';


export default combineReducers({
	items,
	user
});