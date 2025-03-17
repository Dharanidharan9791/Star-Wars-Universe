import { useState, useEffect } from "react";
import axios from "axios";

export const useVehicles = (vehicleUrls) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!vehicleUrls || vehicleUrls.length === 0) {
      setVehicles([]); // Reset state when no URLs are provided
      setLoading(false);
      return;
    }

    const fetchVehicles = async () => {
      setLoading(true);
      try {
        const vehicleRequests = vehicleUrls.map((url) => axios.get(url));
        const responses = await Promise.all(vehicleRequests);
        
        // Ensure correct data extraction
        const vehicleNames = responses.map((res) => res.data?.name || "Unknown Vehicle");
        setVehicles(vehicleNames);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [JSON.stringify(vehicleUrls)]); // Prevent unnecessary re-renders

  return { vehicles, loading, error };
};
