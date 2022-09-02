import {ADD_CHAT,REMOVE_CHAT} from "./chatActions";


const initialState = [
    {
        id:"chat1",
        title:"Akim",
        messages:['c1','c2','c3']
    },
    {
        id:"chat2",
        title:"Asem",
        messages:['c1','c2']
    }
];

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return [...state,action.payload]
        }
        case REMOVE_CHAT: {
            return [...state.filter((e,u) => u < state.length -1)]
        }
        default:
            return state;
    }
}