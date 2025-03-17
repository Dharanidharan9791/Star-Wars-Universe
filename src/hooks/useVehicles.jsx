import { useState, useEffect } from "react";
import axios from "axios";

export const useVehicles = (vehicleUrls) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!vehicleUrls || vehicleUrls.length === 0) {
      setVehicles([]);
      setLoading(false);
      return;
    }

    const fetchVehicles = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(vehicleUrls.map((url) => axios.get(url)));
        setVehicles(responses.map((res) => res.data.name));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [JSON.stringify(vehicleUrls)]);

  return { vehicles, loading, error };
};
