import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharcters";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, loading, error, totalPages } = useCharacters(currentPage); // Get totalPages dynamically
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-4">Characters</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/character/${character.url.split("/").slice(-2, -1)[0]}`)
              }
            >
              <CharacterCard
                name={character.name}
                gender={character.gender}
                homeworld={character.homeworld} // Pass homeworld URL
                birthYear={character.birth_year}
                hairColor={character.hair_color}
                height={character.height}
                mass={character.mass}
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages} // Use dynamic totalPages
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;