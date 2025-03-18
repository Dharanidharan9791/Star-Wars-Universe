import { getCharacter } from "../apis/swapiAPI";
import { useState, useEffect } from "react";

// Custom hook to fetch and manage the state of a single character
export const useCharacter = (id) => {
    const [character, setCharacter] = useState(null); // Holds the character data
    const [loading, setLoading] = useState(false); // Tracks the loading state
    const [error, setError] = useState(null); // Tracks any errors during the fetch

    useEffect(() => {
        const fetchCharacter = async () => {
            setLoading(true);
            setError(null); // Reset error state before fetching
            try {
                const response = await getCharacter(id); // Fetch character data by ID
                setCharacter(response);
            } catch (error) {
                setError(error); // Capture and set any errors
            } finally {
                setLoading(false); // Reset loading state
            }
        };
        fetchCharacter();
    }, [id]); // Re-run the effect when the ID changes

    return { character, loading, error }; // Return the state and data
};
