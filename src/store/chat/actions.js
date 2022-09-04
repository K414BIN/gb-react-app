export const ADD_CHAT = "ADD_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const addChatAC = (chatArr) => ({
    type : ADD_CHAT,
    payload : chatArr
});

export const REMOVE_CHAT = 'REMOVE_CHAT';

export const removeChatAC = () => ({
    type: REMOVE_CHAT,
})