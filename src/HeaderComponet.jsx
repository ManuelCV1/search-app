import { Link } from "react-router-dom";
import style from "./HeaderComponet.module.css"
import { SearchInputComponent } from "./SearchInputComponent";

export function HeaderComponent({searchKeywordDebounced}) {
    return (
        <header>
          <div className={style.linksText}>
          <Link to="/gifs">Gifs</Link>
          <br />
          <Link to="/movies">Movies</Link>
          <br />
          <Link to="/soon">Coming soon...</Link>
          </div>
          <br />
          <br />
          <h1 className={style.searchTitle}>Search App</h1>
          <SearchInputComponent searchKeyword={searchKeywordDebounced}/>
        </header>
    );
}