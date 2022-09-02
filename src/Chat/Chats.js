import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {addChatAC, removeChatAC} from "./chatActions";

export const getChatList =(state ) => state.chats

const Chats = () => {

    const dispatch = useDispatch();
    const chats = useSelector(getChatList)
    const [currentChatID, setcurrentChatID] = useState(0);

    const newChat = {
        id: 'chat4',
        title: 'Новый юзер',
        messages: []
    }

    const addChatHandler = () => {
        dispatch(addChatAC(newChat))
        console.log(addChatAC(newChat))
    }

    const removeChatHandler = () => {
        dispatch(removeChatAC())
        console.log(removeChatAC())
    }

    return (
        <>
            <div >
                {/*chats.map(({title},id) => <div className='chatItem' key = {id} onClick={()=>{setcurrentChatID(id)}}>{title}</div>)*/}
                <button  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={addChatHandler}>Добавить чат</button >
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={removeChatHandler}>Удалить чат</button >
            </div>
            <div style={{width:'70%',padding:'50px'}}>
                {/*<Chat id={currentChatID} messages = {chats[currentChatID].messages}></Chat>*/}
            </div>
        </>

    );
}

export default Chats;

