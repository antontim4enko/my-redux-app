<<<<<<< HEAD
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

=======

import { DELETE_ITEM, REFRESH_ITEM, ADD_TODO } from "../constans/ActionTypes";
const initialState = [
    {
        id: 122467654,
        category: 'Products',
        text: "Make todo app"
    },
    {
        id: 14447799,
        category: 'Apps',
        text: "With Redux.js"
    },
    {
        id: 6784922254,
        category: 'Products',
        text: "Connect with redux"
    },
    {
        id: 77998845112,
        category: 'Apps',
        text: "Redux is the best stuff in the World"
    },
    {
        id: 12345435111121,
        category: 'Apps',
        text: "I like Redux a lot"
    },
    {
        id: 1111777,
        category: 'TV',
        text: "My todo app is very cool"
    }
];
>>>>>>> 15c8822b0a7741aa34638d941ab1f75a24496713
export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_ITEM:
            return action.payload;
<<<<<<< HEAD
        case REFRESH_ITEM:
            return action.payload
        case ADD_TODO:
            return [
                ...state, action.payload
            ]
        case CHECKBOX_TOGGLE:
            return action.payload
=======
        case REFRESH_ITEM :
                return action.payload 
        case ADD_TODO :
                return [
                    ...state, action.payload
                ]    
>>>>>>> 15c8822b0a7741aa34638d941ab1f75a24496713
        default:
            return state;
    }
}