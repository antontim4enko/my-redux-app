import { SET_INPUT_VALUE } from './../constans/ActionTypes';

const initialState = {
    inputValue: ""
};

export default function(state = initialState, action){
    switch (action.type) {
        case SET_INPUT_VALUE :
            return {
                inputValue: action.payload
            };
        default:
            return state;
    }
}