import { useState, useEffect } from "react";
import axios from "axios";

export const usePlanet = (url) => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchPlanet = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setPlanet(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [url]);

  return { planet, loading, error };
};
