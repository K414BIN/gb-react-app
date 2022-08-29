import { createSlice } from "@reduxjs/toolkit";


export const chatSlice = createSlice({
  name: "chats",
  initialState: {
    isAuthenticated: false,
    myUid: '',
    messages: {},
    chats: {},
  },
  reducers: {

    addMessage: (state, action) => {
      state[action.payload.id].messages.push(action.payload.data)
        return state
      },

    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;

      state.messages = {
        ...state.messages,
        [chatId]: messages,
      };
    },

    setChat: (state, action) => {
                  return  [ ...state,action.payload]
    },

    eraseChat: (state) => {
      return  [ ...state.filter((e,i) => i < state.length-1 )]
    },

    changeIsAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setMyUid: (state, action) => {
      state.myUid = action.payload;
    }
  },
});

export const { addMessage, changeIsAuth, setMessages, setMyUid, setChat,eraseChat } = chatSlice.actions;

export default chatSlice.reducer;