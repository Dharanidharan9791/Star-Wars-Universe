import axios from "axios";
import { useState, useEffect } from "react";

export const useGetPlanet = (url) => {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setPlanet(null);
            setLoading(false);
            return;
        }

        const fetchPlanet = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url); // Fetch directly using the URL
                setPlanet(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPlanet();
    }, [url]);

    return { planet, loading, error };
};
