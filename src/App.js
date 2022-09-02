import './App.css';
import React, { useCallback, useContext, useEffect, useState} from "react";
import Routed from "./Routing/routed";
import {connect} from "react-redux";

const UserContext = React.createContext(null);
const AdminContext = React.createContext(null);


function App () {

    const [user,setUser] = useState(null);

    return (
        <UserContext.Provider value = {user}>
            <AdminContext.Provider value={'Admin'}>
        <div className="App">
            <Routed />
            {/*<ConnectedComp1 />            <ConnectedComp2 /> */}
        </div>
            </AdminContext.Provider>
            </UserContext.Provider >
    );
}

export default App;

{
/* Не заработал этот кусок кода - пишет, что  chats.map приходит undefine
const Comp1 = ({chats}) => {

    return (
      <div style={{display:'flex',flexDirection:"column"}}>
          <h1>Пустые чаты</h1>
          {
              chats.map(e => e?.message.length === 0 ?< div key={e.id}>{e.title}</div>: null)
          }
      </div>
    );
}

const Comp2 = ({chats}) => {

    return (
        <div style={{display:'flex',flexDirection:"column"}}>
            <h1>Избранные чаты</h1>
            {
                chats.map(e => e?.message.length === 'user' ?< div key={e.id}>{e.title}</div>: null)
            }
        </div>
    );

}


const mapStateToProps = (state) => ({chats:state})
const ConnectedComp1 = connect(mapStateToProps)(Comp1)
const ConnectedComp2 = connect(mapStateToProps)(Comp2)
*/}