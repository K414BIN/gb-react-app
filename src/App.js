import './App.css';
import React, { useCallback, useContext, useEffect, useState} from "react";
import Routed from "./Routing/routed";

const UserContext = React.createContext(null);
const AdminContext = React.createContext(null);


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
