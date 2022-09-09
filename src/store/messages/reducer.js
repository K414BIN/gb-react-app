import { ADD_MESSAGE } from "./actions";
import {string} from "prop-types";

const initialState = {
    // {[chatId]: [{id, text, author}]}
    messages: {author: string, text: string},
    //messages: [{id: author: string, text: string}]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
