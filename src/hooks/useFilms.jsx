import { useState, useEffect } from "react";
import axios from "axios";

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
        const responses = await Promise.all(filmUrls.map((url) => axios.get(url)));
        setFilms(responses.map((res) => res.data.title));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [JSON.stringify(filmUrls)]);

  return { films, loading, error };
};