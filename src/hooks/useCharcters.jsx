import { getCharacters } from "../apis/swapiAPI";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../redux/characterSlice";

export const useCharacters = (page) => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.list);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            setError(null); // Reset error before fetching
            try {
                const response = await getCharacters(page); // Pass page number to API
                dispatch(setCharacters(response.results));
                setTotalPages(Math.ceil(response.count / 10)); // Calculate total pages dynamically
            } catch (error) {
                setError(error); // Capture error
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, [dispatch, page]);

    return { characters, loading, error, totalPages };
};