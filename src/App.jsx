import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const CharacterDetailsPage = lazy(() => import("./pages/CharacterDetailsPage"));
const FavoritesList = lazy(() => import("./pages/FavoritesList"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
