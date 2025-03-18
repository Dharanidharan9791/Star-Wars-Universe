import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { useFilms } from "../hooks/useFilms";
import { useVehicles } from "../hooks/useVehicles";
import { useStarships } from "../hooks/useStarships";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

const CharacterDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list || []);

  const { character, loading, error } = useCharacter(id);
  const { films, loading: filmsLoading } = useFilms(character?.films || []);
  const { vehicles, loading: vehiclesLoading } = useVehicles(character?.vehicles || []);
  const { starships, loading: starshipsLoading } = useStarships(character?.starships || []);

  const [homeworldName, setHomeworldName] = useState("Unknown");
  const [homeworldError, setHomeworldError] = useState(null); // Add error state

  useEffect(() => {
    const fetchHomeworld = async () => {
      if (character?.homeworld) {
        try {
          const response = await fetch(character.homeworld);
          const data = await response.json();
          setHomeworldName(data.name || "Unknown");
          setHomeworldError(null); // Reset error on success
        } catch (error) {
          setHomeworldName("Unknown");
          setHomeworldError(error); // Capture error
        }
      }
    };
    fetchHomeworld();
  }, [character?.homeworld]);

  // Always derive `isFavorite` from the Redux state
  const isFavorite = favorites.some((fav) => fav.url === character?.url);

  const handleToggleFavorite = () => {
    if (!character) return;
    if (isFavorite) {
      dispatch(removeFavorite({ url: character.url }));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <LoadingErrorWrapper loading={loading} error={error}>
      {character && (
        <div className="relative p-4 rounded shadow">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 text-center sm:text-left">
              {character.name}
            </h2>
            <Button
              variant="primary"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <p><span className="font-bold">Gender:</span> {character.gender}</p>
              <p><span className="font-bold">Hair Color:</span> {character.hair_color}</p>
              <p><span className="font-bold">Eye Color:</span> {character.eye_color}</p>
              <p><span className="font-bold">Height:</span> {character.height}</p>
              <p><span className="font-bold">Birth Year:</span> {character.birth_year}</p>
            </div>
            <div>
              <p><span className="font-bold">Home World:</span> {homeworldError ? "Error loading homeworld" : homeworldName}</p>
              <p><span className="font-bold">Skin Color:</span> {character.skin_color}</p>
              <p><span className="font-bold">Mass:</span> {character.mass}</p>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-blue-500">
            Character Films and Starships
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-md sm:text-lg font-bold text-blue-500 mb-5">Films:</h4>
              {filmsLoading ? (
                <p className="text-black">Loading films...</p>
              ) : films.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {films.map((film, idx) => (
                    <li key={idx} className="bg-gray-50 p-2 rounded border border-blue-500">
                      {film}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No films available for this character.</p>
              )}
            </div>
            <div>
              <h4 className="text-md sm:text-lg font-bold text-blue-500 mb-5">Starships:</h4>
              {starshipsLoading ? (
                <p className="text-black">Loading starships...</p>
              ) : starships.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {starships.map((s, idx) => (
                    <li key={idx} className="bg-gray-50 p-2 rounded border border-blue-500">
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No starships available for this character.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </LoadingErrorWrapper>
  );
};

export default CharacterDetails;
