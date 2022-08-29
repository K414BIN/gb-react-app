import {removeChatAC,addChatAC} from "./chatActions";
import {useDispatch} from "react-redux";
import {useState} from "react";
import Chat from "./Chat";

const Chats = () => {

    const dispatch = useDispatch();

    const [currentChatID, setcurrentChatID] = useState(0);

    const newChat = {
        id: 'chat4',
        title: 'Новый юзер',
        messages: []
    }

    const addChatHandler = () => {
        dispatch(addChatAC(newChat))
    }

    const removeChatHandler = () => {
        dispatch(removeChatAC())
    }

    return (
        <>
            <div style={{width:'30%',padding:'50px',background:'#f9f9f9'}}>
                {Chat.map(({title},id) => <div className='chatItem' key = {id} onClick={()=>{setcurrentChatID(id)}}>{title}</div>)}
                <button onClick={addChatHandler}>Добавить чат</button>
                <button onClick={removeChatHandler}>Удалить чат</button>
            </div>
            <div style={{width:'70%',padding:'50px'}}>

            </div>
        </>

    );
}

export default Chats;