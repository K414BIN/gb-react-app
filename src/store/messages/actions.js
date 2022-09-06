export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
})

export const  AUTHORS = [ {ME:"Alexander", BOT:"Chat-bot"}];