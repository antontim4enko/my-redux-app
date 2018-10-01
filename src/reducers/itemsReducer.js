const initialState = {
    items: [
        {
            id: 122467654,
            text: "Make todo app"
        },
        {
            id: 14447799,
            text: "With Redux.js"
        },
        {
            id: 6784922254,
            text: "Connect with redux"
        },
        {
            id: 77998845112,
            text: "Redux is the best stuff in the World"
        },
        {
            id: 12345435111121,
            text: "I like Redux a lot"
        },
        {
            id: 1111777,
            text: "My todo app is very cool"
        }
    ]
}
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}