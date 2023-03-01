import "./App.css";
import { SearchInputComponent } from "./SearchInputComponent";
import { Route, Link, Routes, useSearchParams, Navigate } from "react-router-dom";
import { GifLayaout } from "./pages/GifPage/GifLayaout";
import { MovieLayaout } from "./pages/MoviePage/MovieLayaout";
import { GifDetails } from "./pages/GifPage/GifDetails";
import { MovieDetails } from "./pages/MoviePage/MovieDetails";
import { useDebounce } from "./Hooks/useDebounce";


function App() {

  const [query] = useSearchParams();
  const searchKeyword = query.get("search");
  const searchKeywordDebounced = useDebounce(searchKeyword,300);
  
  return (
    <div className="App">
    
        <header>
          <Link to="/gifs">Gifs</Link>
          <br />
          <Link to="/movies">Movies</Link>
          <br />
          <Link to="/soon">Coming soon...</Link>
          <SearchInputComponent searchKeyword={searchKeywordDebounced}/>
        </header>
        <main>
          <Routes>
            <Route path="/gifs" element={<GifLayaout searchKeyword={searchKeywordDebounced} key={searchKeywordDebounced}/>} />
              
            <Route path="/gifs/details/:gifId" element={<GifDetails />} />
              
            <Route path="/movies" element={<MovieLayaout />} />
              
            <Route path="/movies/details/:movieId" element={<MovieDetails />} />
              
            <Route path="*" element={<Navigate replace to="gifs"/>} />
              
          </Routes>
        </main>
  
    </div>
  );
}

export default App;
