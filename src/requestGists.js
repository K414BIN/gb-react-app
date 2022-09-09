import {useState} from "react";
import {API_URL_PUBLIC} from "./gistsActions";

const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [gists, setGists] = useState([]);

const requestGists = async () => {

    setLoading(true);
    try {
        const response = await fetch(API_URL_PUBLIC);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();
        setGists(result);
    } catch (err) {
        setError(true);
        console.warn(err);
    } finally {
        setLoading(false);
    }
};

export  default requestGists ;