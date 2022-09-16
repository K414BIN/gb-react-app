import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as PropTypes from "prop-types";
import { AuthContextProvider } from "./context/AuthContext";
import {ChatContextProvider} from "./context/ChatContext";

export const MyDataContext = React.createContext({
    appVersion: '1.0',
    author: 'Alexander Kalabin'
});

const root = ReactDOM.createRoot(document.getElementById('root'));

AuthContextProvider.propTypes = {children: PropTypes.node};
root.render(
    <MyDataContext.Provider value={{ appName: 'K414BIN ChAT', appVersion: '2.0', author: 'Alexander Kalabin' }}>
    <AuthContextProvider>
        <ChatContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChatContextProvider>
    </AuthContextProvider>
    </MyDataContext.Provider>
);
