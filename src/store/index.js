import {chatsReducer} from "./chat/reducer";
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";

{/*
import {applyMiddleware, combineReducers, compose, configureStore, createStore} from "@reduxjs/toolkit";
import {chatsReducer} from "./chat/reducer";
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";
import thunk from 'redux-thunk';

export default configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer
    },
});


    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = null;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    export const store = createStore(
        combineReducers({
            chats: chatsReducer,
            profile: profileReducer,
            messages: messagesReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );


import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

 */}

// localStorage
// ...
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = null;
const composeEnhancers = compose;
// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}
// комбинируем редьюсеры
const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
});
// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
// создаем store с использованием persistedReducer
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// создаем persistor
export const persistor = persistStore(store);
