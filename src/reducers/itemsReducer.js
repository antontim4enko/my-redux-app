import { DELETE_ITEM, REFRESH_ITEM, ADD_TODO, CHECKBOX_TOGGLE } from "../constans/ActionTypes";

let initialState;
const localState = localStorage.getItem('localItems');
if (localState !== null) {
    initialState = JSON.parse(localState);
} else {
    initialState = [
        {
            id: 122467654,
            isFinished: false,
            text: "Make todo app"
        },
        {
            id: 14447799,
            isFinished: false,
            text: "With Redux.js"
        },
        {
            id: 6784922254,
            isFinished: true,
            text: "Connect with redux"
        },
        {
            id: 77998845112,
            isFinished: false,
            text: "Redux is the best stuff in the World"
        },
        {
            id: 12345435111121,
            isFinished: false,
            text: "I like Redux a lot"
        },
        {
            id: 1111777,
            isFinished: false,
            text: "My todo app is very cool"
        }
    ];
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_ITEM:
            return state.filter( item => item.id !== action.payload);
        case REFRESH_ITEM:
            return state.map(
                item => (item.text === action.payload.oldText)
                    ? { ...item, text : action.payload.newText}
                    : item
            );
        case ADD_TODO:
            return [
                ...state, action.payload
            ];
        case CHECKBOX_TOGGLE:
            return state.map( item => (item.id === action.payload)
                ? { ...item, isFinished: !item.isFinished}
                : item
            );
        default:
            return state;
    }
}