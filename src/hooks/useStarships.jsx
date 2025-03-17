import { useState, useEffect } from "react";
import axios from "axios";

export const useStarships = (starshipUrls) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!starshipUrls || starshipUrls.length === 0) {
      setStarships([]);
      setLoading(false);
      return;
    }

    const fetchStarships = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(starshipUrls.map((url) => axios.get(url)));
        setStarships(responses.map((res) => res.data.name));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, [JSON.stringify(starshipUrls)]);

  return { starships, loading, error };
};

