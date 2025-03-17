import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { useFilms } from "../hooks/useFilms";
import { useVehicles } from "../hooks/useVehicles";
import { useStarships } from "../hooks/useStarships";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";
import Button from "../components/Button";

const CharacterDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { character, loading, error } = useCharacter(id);
    const { films, loading: filmsLoading } = useFilms(character?.films || []);
    const { vehicles, loading: vehiclesLoading } = useVehicles(character?.vehicles || []);
    const { starships, loading: starshipsLoading } = useStarships(character?.starships || []);

    const handleAddToFavorites = () => {
        dispatch(addFavorite(character));
    };

    if (loading) return <p>Loading character...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {character && (
                <div>
                    <h2>{character.name}</h2>
                    <p>Gender: {character.gender}</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Skin Color: {character.skin_color}</p>
                    <p>Eye Color: {character.eye_color}</p>

                    <Button variant="primary" onClick={handleAddToFavorites}>
                        Add to Favorites
                    </Button>

                    <h3>Films</h3>
                    {filmsLoading ? <p>Loading films...</p> : <ul>{films.map((film, idx) => <li key={idx}>{film}</li>)}</ul>}

                    <h3>Vehicles</h3>
                    {vehiclesLoading ? <p>Loading vehicles...</p> : <ul>{vehicles.map((v, idx) => <li key={idx}>{v}</li>)}</ul>}

                    <h3>Starships</h3>
                    {starshipsLoading ? <p>Loading starships...</p> : <ul>{starships.map((s, idx) => <li key={idx}>{s}</li>)}</ul>}
                </div>
            )}
        </>
    );
};

export default CharacterDetails;
