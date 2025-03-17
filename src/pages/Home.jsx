import React, { useState, lazy, Suspense } from "react";
import { useCharacters } from "../hooks/useCharcters";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import CardContainer from "../components/CardContainer";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

const CharacterCard = lazy(() => import("../components/CharacterCard"));

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, loading, error, totalPages } = useCharacters(currentPage);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Star Wars Characters</h1>
        <LoadingErrorWrapper loading={loading} error={error}>
          <CardContainer>
            {characters.map((character) => (
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
                </div>
              </Suspense>
            ))}
          </CardContainer>
        </LoadingErrorWrapper>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;