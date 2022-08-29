import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './Profile/profileSlice';
import thunkMiddleware from 'redux-thunk';
import chatReducer from "./Chat/chatSlice";

//window.__REDUX_DEVTOOLS_EXTENSION__ = undefined;
export default configureStore({
    reducer: {
        profile: profileReducer,
       chat: chatReducer,
    },
    middleware: [thunkMiddleware]
});
