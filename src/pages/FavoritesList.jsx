import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import CharacterCard from "../components/CharacterCard";
import EditCharacterModal from "./EditCharacterModal";
import Button from "../components/Button";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();
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
    return <p className="text-center text-lg">No favorites added yet.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((character) => (
          <div key={character.url}>
            <CharacterCard
              name={character.name}
              gender={character.gender}
              homeworld={character.homeworld}
              birthYear={character.birth_year}
              hairColor={character.hair_color}
              height={character.height}
              mass={character.mass}
            />
            <div className="flex justify-between mt-2">
              <Button variant="tertiary" onClick={() => handleEdit(character)}>
                Edit
              </Button>
              <Button variant="ghost" onClick={() => handleRemove(character)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      {editingCharacter && (
        <EditCharacterModal
          character={editingCharacter}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default FavoritesList;
