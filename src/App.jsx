import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoritesList from "./pages/FavoritesList"; // Import FavoritesList

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
        <Route path="/favorites" element={<FavoritesList />} /> {/* Add route */}
      </Route>
    </Routes>
  );
}

export default App;
