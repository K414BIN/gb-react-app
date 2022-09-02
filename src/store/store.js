import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../Profile/profileSlice';
import chatReducer from "../Chat/chatSlice";


export default configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
        //messages: messagesReducer
    },

});
