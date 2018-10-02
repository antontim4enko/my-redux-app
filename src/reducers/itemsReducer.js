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
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}