import {chatsReducer} from "./chat/reducer";
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";

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
