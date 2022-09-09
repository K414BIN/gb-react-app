import {useCallback, useEffect, useState} from "react";
import {API_URL_PUBLIC} from "./gistsActions";

export const GistsList = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const requestGists = () => {
        fetch(API_URL_PUBLIC)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then((result) => setGists(result))
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    };
    useEffect(() => {
        requestGists();
    }, []);
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }
    return <ul>{gists.map(renderGist)}</ul>;
};
