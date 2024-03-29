import { Route, Routes, useSearchParams, Navigate } from "react-router-dom";
import { GifLayaout } from "./pages/GifPage/GifLayaout";
import { MovieLayaout } from "./pages/MoviePage/MovieLayaout";
import { GifDetails } from "./pages/GifPage/GifDetails";
import { MovieDetails } from "./pages/MoviePage/MovieDetails";
import { useDebounce } from "./Hooks/useDebounce";
import { HeaderComponent } from "./HeaderComponet";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

function App() {
  const [query] = useSearchParams();
  const searchKeyword = query.get("search");
  const searchKeywordDebounced = useDebounce(searchKeyword, 300);

  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>

      <main>
        <Routes>
          <Route
            path="/gifs"
            element={
              <GifLayaout
                searchKeyword={searchKeywordDebounced}
                key={searchKeywordDebounced}
              />
            }
          />

          <Route
            path="/gifs/details/:gifId"
            element={<GifDetails searchKeyword={searchKeyword} />}
          />

          <Route
            path="/movies"
            element={
              <MovieLayaout
                searchKeyword={searchKeywordDebounced}
                key={searchKeywordDebounced}
              />
            }
          />

          <Route
            path="/movies/details/:movieId"
            element={<MovieDetails searchKeyword={searchKeyword} />}
          />

          <Route path="/soon" element={<ComingSoon />} />

          <Route path="*" element={<Navigate replace to="movies" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
