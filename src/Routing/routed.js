import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {useCallback, useState} from "react";
import store from "../store";

function Chats() {
    return null;

}

export default function Routed() {
 return (
         <BrowserRouter>
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

function Profile() {
    const [dummy, setDummy] = useState();
    const { showName, name } = store.getState().profile;
    const dispatch = store.dispatch;

    function toggleShowName() {
        return null;
    }

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);

        function setDummy(param) {
            return null;
        }

        setDummy({});
    }, [dispatch]);

    return (
             <div >
                   <h4>Profile</h4>
                     <label htmlFor="small-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                     <input type="text" id="small-input"
                            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                    <label htmlFor="small-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <input type="text" id="small-input"
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                     <input
                         type="checkbox"
                         checked={showName}
                         value={showName}
                         onChange={setShowName}
                    />
                    <span>Show Name</span>
                    {showName && <div>{name}</div>}
            </div>);
}
