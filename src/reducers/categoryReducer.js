import { SET_CATEGORY } from "../constans/ActionTypes";

const initialState = "";

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return action.payload ;
        default:
            return state;
    }
}