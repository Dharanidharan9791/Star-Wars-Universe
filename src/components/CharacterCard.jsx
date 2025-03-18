import React from "react";
import { usePlanet } from "../hooks/usePlanet";
import { FaGlobe, FaBirthdayCake, FaVenusMars, FaPalette, FaRulerVertical, FaWeight } from "react-icons/fa";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { MESSAGES } from "../constants/messages";

// Component to display a character card with details and favorite toggle
const CharacterCard = ({ name, gender, homeworld, birthYear, hairColor, height, mass, url }) => {
  const { planet, loading, error } = usePlanet(homeworld); // Fetch homeworld details
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list); // Get the list of favorite characters
  const navigate = useNavigate();

  // Check if the character is already in the favorites list
  const isFavorite = favorites.some((fav) => fav.url === url);

  // Toggle the favorite status of the character
  const handleToggleFavorite = (event) => {
    event.stopPropagation(); // Prevent triggering parent click events
    if (isFavorite) {
      dispatch(removeFavorite({ url }));
    } else {
      dispatch(addFavorite({ name, gender, homeworld, birthYear, hairColor, height, mass, url }));
    }
  };

  // Navigate to the character details page
  const handleNavigate = () => {
    navigate(`/character/${url.split("/").slice(-2, -1)[0]}`);
  };

  return (
    <div className="p-5" onClick={handleNavigate}>
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold text-blue-500">{name}</div>
        <button onClick={handleToggleFavorite} aria-label="Toggle Favorite">
          {isFavorite ? (
            <TiHeartFullOutline className="text-3xl text-red-500" />
          ) : (
            <TiHeartOutline className="text-3xl text-gray-500" />
          )}
        </button>
      </div>
      {/* Display character details */}
      <p>
        <FaGlobe className="inline-block mr-2" />
        <strong>Home World:</strong> {loading ? MESSAGES.LOADING : error ? MESSAGES.UNKNOWN : planet?.name || MESSAGES.UNKNOWN}
      </p>
      <p>
        <FaBirthdayCake className="inline-block mr-2" />
        <strong>Birth Year:</strong> {birthYear}
      </p>
      <p>
        <FaVenusMars className="inline-block mr-2" />
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <FaPalette className="inline-block mr-2" />
        <strong>Hair Color:</strong> {hairColor}
      </p>
      <p>
        <FaRulerVertical className="inline-block mr-2" />
        <strong>Height:</strong> {height} cm
      </p>
      <p>
        <FaWeight className="inline-block mr-2" />
        <strong>Mass:</strong> {mass} kg
      </p>
    </div>
  );
};

// Define prop types for the component
CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CharacterCard;