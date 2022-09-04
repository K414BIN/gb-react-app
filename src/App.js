import './App.css';
import React, {  useState} from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Profile from "../store/profile";
import Chats from "../store/chat";

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

 function Routed() {
    return (
        <BrowserRouter>
            <>
            <div className=" left top grid grid-cols-3 divide-x-4 divide-gray-500 divide-dots">
                <div></div>
                <Link className="text-lg text-blue-600 hover:underline hover:text-rose-900 visited:text-rose-700 active:text-yellow-500" to='/home'>Home</Link>
                <Link className="text-lg text-blue-600 hover:underline hover:text-rose-900 visited:text-rose-700 active:text-yellow-500" to='/profile'> Profile </Link>
                <Link className="text-lg text-blue-600 hover:underline hover:text-rose-900 visited:text-rose-700 active:text-yellow-500" to='/chats'>Chats</Link>
                <Link className="text-lg text-blue-600 hover:underline hover:text-red-900 visited:text-rose-700 active:text-yellow-500 " to='/chats/chat1'>Chat1</Link>
                <Link className="text-lg text-blue-600 hover:underline hover:text-red-900 visited:text-rose-700 active:text-yellow-500 " to='/chats/chat2'>Chat2</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/chats" element={<Chats />} >
                        <Route path=":chatID" element={<Navigate replace to="/chats" />} />
                    </Route>
                </Routes>
            </div>
            </>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            <main>
                <h1> Welcome to the homepage!</h1>
            </main>
        </>
    );
}

export default App;