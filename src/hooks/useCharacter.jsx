import { getCharacter } from "../apis/swapiAPI";
import { useState, useEffect } from "react";

export const useCharacter = (id) => {
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {

        const fetchCharacter = async () => {
            setLoading(true)
            try {
                const response = await getCharacter(id)
                setCharacter(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCharacter()
    }, [id])

    return { character, loading, error }
}
