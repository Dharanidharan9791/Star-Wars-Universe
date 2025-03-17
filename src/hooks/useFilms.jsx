import axios from "axios";
import { useState, useEffect } from "react";

export const useFilms = (filmUrls) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!filmUrls || filmUrls.length === 0) {
            setFilms([]);
            setLoading(false);
            return;
        }

        const fetchFilms = async () => {
            setLoading(true);
            try {
                const filmRequests = filmUrls.map((url) => axios.get(url));
                const responses = await Promise.all(filmRequests);
                const filmTitles = responses.map((res) => res.data?.title || "Unknown Film");
                setFilms(filmTitles);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchFilms();
    }, [JSON.stringify(filmUrls)]);

    return { films, loading, error };
};