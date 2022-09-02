import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {changeName, toggleShowName} from "./actions";

export default function Profile() {


    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
            <div style={{width : '30%'}}>
                <input type="text" id="small-input"
                       className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={value} onChange={handleChange} >
                </input>

            </div>
            <div style={{width : '30%'}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={setName}>Change Name</button>
            </div>
        </>
    );
}

