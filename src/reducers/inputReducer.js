import { SET_INPUT_VALUE } from './../constans/ActionTypes';

const initialState = "" ;

export default function(state = initialState, action){
    switch (action.type) {
        case SET_INPUT_VALUE :
            return action.payload ;
        default:
            return state;
    }
}