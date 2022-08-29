import './App.css';
import { Button } from "@material-tailwind/react";
import {useState} from 'react';
import Routed from './Routing/routed';
import * as PropTypes from "prop-types";

const ChildWithProps = ({state}) => {
    return (
        state ?
            <h1 style={{color: '#FF0000'}}>Красный</h1> : <h1 style={{color: '#0000FF'}}>Синий</h1>
    );
}
ChildWithProps.propTypes = {state: PropTypes.bool};

const Modal = ({children,setModal}) => {
    const styles = {
        width: '50%',
        height: '50%',
        background: '#fff'
    }

    return (
        <div className='modalContainer' onClick={(e) =>{setModal(true)}}>
            <div style={styles} onClick={(e) =>{e.stopPropagation()}}>
                {children}
            </div>
        </div>

    );

}

Modal.propTypes = {
    setModal: PropTypes.func,
    children: PropTypes.node
};

function App () {
    const [color, setColor] = useState(false);
    const [modal, setModal] = useState(false);
    return (
        <div className="App">
            <Button  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setModal(true)}}>Открыть профиль</Button>
            {
                modal === true && <Modal setModal={setModal}>
                    <div> Modal body </div>
                </Modal>
            }
            <Button  className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setColor(prev => !prev)}}> Переключить цвет</Button>
            <ChildWithProps state={color}></ChildWithProps>
            <Routed />
        </div>
    );
}
export default App;
