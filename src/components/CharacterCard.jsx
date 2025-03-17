import React from "react";
import { useGetPlanet } from "../hooks/usePlanet";

const CharacterCard = ({ name, gender, homeworld, birthYear, hairColor, height, mass }) => {
  const { planet, loading, error } = useGetPlanet(homeworld); // Pass the full URL directly

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <div className="flex">
        <div className="text-xl font-bold mb-2">{name}</div>
        <button className="btn-">Favorites</button>
      </div>
      <p><strong>Gender:</strong> {gender}</p>
      <p>
        <strong>Home Planet:</strong>{" "}
        {loading ? "Loading..." : error ? "Unknown" : planet?.name || "Unknown"}
      </p>
      <p><strong>Birth Year:</strong> {birthYear}</p>
      <p><strong>Hair Color:</strong> {hairColor}</p>
      <p><strong>Height:</strong> {height} cm</p>
      <p><strong>Mass:</strong> {mass} kg</p>
    </div>
  );
};

export default CharacterCard;
