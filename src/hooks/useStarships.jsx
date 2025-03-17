import { useState, useEffect } from "react";
import axios from "axios";

export const useStarships = (starshipUrls) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!starshipUrls || starshipUrls.length === 0) {
      setStarships([]); // Reset state when no URLs are provided
      setLoading(false);
      setError("No Starships Found");
      return;
    }

    const fetchStarships = async () => {
      try {
        setLoading(true);
        const starshipRequests = starshipUrls.map((url) => axios.get(url));
        const responses = await Promise.all(starshipRequests);
        setStarships(responses.map((res) => res.data.name));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, [JSON.stringify(starshipUrls)]); // Use JSON.stringify to prevent infinite re-renders

  return { starships, loading, error };
};

