import { ADD_CHAT } from "./actions";
import {string} from "prop-types";

const initialState = {
  chatList: {author: string, text: string},
   // messages: [{author: string, text: string}]}
};

export  const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const currentList = state.chatList[action.chatId] || [];
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            }
        }

        default:
            return state;
    }
};

