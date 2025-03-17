import React, { useState, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import CardContainer from "../components/CardContainer";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditCharacterModal = lazy(() => import("./EditCharacterModal"));
const CharacterCard = lazy(() => import("../components/CharacterCard"));
const Button = lazy(() => import("../components/Button"));

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editingCharacter, setEditingCharacter] = useState(null);

  const handleRemove = (character) => {
    dispatch(removeFavorite(character));
  };

  const handleEdit = (character) => {
    setEditingCharacter(character);
  };

  const handleCloseModal = () => {
    setEditingCharacter(null);
  };

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center flex-grow">
          <FaHeart className="text-red-500 text-6xl mb-4" />
          <h1 className="text-2xl font-bold mb-2">No favorites added yet</h1>
          <p className="text-gray-500 mb-4">Add characters to your favorites list and they'll show up here.</p>
          <Suspense fallback={<p>Loading Button...</p>}>
            <Button variant="primary" onClick={() => navigate("/")}>
              Browse Characters
            </Button>
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-4 text-center">Favorites</h1>
        <CardContainer>
          {favorites.map((character) => (
            <Suspense key={character.url} fallback={<p>Loading Character...</p>}>
              <div className="border border-gray-600 rounded-lg shadow-md">
                <CharacterCard
                  name={character.name}
                  gender={character.gender}
                  homeworld={character.homeworld}
                  birthYear={character.birth_year}
                  hairColor={character.hair_color}
                  height={character.height}
                  mass={character.mass}
                  url={character.url}
                />
                <div className="flex justify-between mt-2 p-4">
                  <Button variant="tertiary" onClick={() => handleEdit(character)}>
                    Edit
                  </Button>
                  <Button variant="ghost" onClick={() => handleRemove(character)}>
                    Remove
                  </Button>
                </div>
              </div>
            </Suspense>
          ))}
        </CardContainer>
      </div>
      {editingCharacter && (
        <Suspense fallback={<p>Loading Modal...</p>}>
          <EditCharacterModal
            character={editingCharacter}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </div>
  );
};

export default FavoritesList;
