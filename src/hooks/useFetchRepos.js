import { useEffect, useState } from 'react';
import { pushQueryToHistory, normalizeData, GITHUB_URL_BASE } from "./helpers";

const useFetchRepos = () => {
    const [repositories, setRepositories] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [inputTouched, setInputTouched] = useState(false);
    const { search } = window.location;

    if (query === '' && search !== '' && !inputTouched) {
        // RegEx would be better.
        setQuery(search.split('=')[1]);
        setInputTouched(true);
    }

    useEffect(() => {
        const fetchFromCache = () => {
            try {
                if (window.localStorage && !!window.localStorage.getItem(query)) {
                    const data = localStorage.getItem(query);
                    const parsedData = JSON.parse(data);
                    setRepositories(normalizeData(parsedData));
                    setLoading(false);
                    return true;
                }

                return false;
            } catch (e) {
                console.warn(e)
            }
        };

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${GITHUB_URL_BASE}?q=${query}&sort=stars&order=desc`);
                const { items } = await response.json();

                if (!!window.localStorage) {
                    window.localStorage.setItem(query, JSON.stringify(items))
                }

                setRepositories(normalizeData(items) || []);
                setLoading(false);
            } catch (e) {
                console.warn(e)
            }
        };

        if (query.length > 2) {
            const isInCache = fetchFromCache();
            !isInCache && fetchData();
        }

        pushQueryToHistory(query);
    }, [query]);

    return {
        repositories,
        query,
        setQuery,
        loading,
        inputTouched,
        setInputTouched
    }
};

export default useFetchRepos;
