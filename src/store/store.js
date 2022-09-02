import { configureStore } from "@reduxjs/toolkit";
import {chatsReducer} from "./chat/reducer";
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";

export default configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer
    },
});
