import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "./chatSlice";

const Chat = (id, messages) => {

    const dispatch = useDispatch()
    const PLACEHOLDER_MESSAGE = "Новое сообщение";

    return (
        <div>
            {messages.map((e,id)=> <div key={id}>{e}</div>)}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{dispatch(addMessage({id:id,data:PLACEHOLDER_MESSAGE}))}}>Отправить</button>

        </div>

    );
}

export default Chat;