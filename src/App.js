import './App.css';
import React, { useCallback, useContext, useEffect, useState} from "react";
import Routed from "./Routing/routed";


const UserContext = React.createContext(null);
const AdminContext = React.createContext(null);

const propsConnectorHOC = (Component) => {
    return (props) => {
        return <Component {...props }/>
    }
}

const withContext = (Component, PassedContext)  => {
    return (props) => {
        const context = useContext(PassedContext);
        return <Component {...props } context = {context}/>
    }
}

const  ContextGetter= ({context}) => {
    return (
        <div>
            <h1>Контекс донор</h1>
            <p>{context}</p>
        </div>
    )
}

function App () {

    const [user,setUser] = useState(null);

    return (
        <UserContext.Provider value = {user}>
            <AdminContext.Provider value={'Admin'}>
        <div className="App">
            <Routed />

        </div>
            </AdminContext.Provider>
            </UserContext.Provider >
    );
}

export default App;

