import { useState, useEffect } from 'react';

function  useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(results => {
            setLoading(false);
            setData(results);
        })
        .catch(error => {
            setLoading(false);
            setError(error);
        });
    },[url]);
    return { data, loading, error };
}

export default useFetch;