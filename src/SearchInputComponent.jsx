import style from "./SearchInputComponent.module.css";
import { ImSearch } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

export function SearchInputComponent() {

  //const navigate = useNavigate();
  //const searchKeyword = useQueryParams();
  const [query,setQuery] = useSearchParams();

  return (
    <div className={style.searchBarContainer}>
      <form
        className={style.searchBarForm}
        onSubmit={(ev)=>ev.preventDefault()}
      >
        <input
        autoFocus 
        className={style.searchBarInput} 
        type={"text"} value={query.get("search") || ""}
        placeholder="Title"
        aria-label="Search" 
        onChange={(ev)=>{
          setQuery({search:ev.target.value})
          //navigate(`/gifs?search=${ev.target.value}`)
        }}>
        </input>
          <ImSearch size={20} className={style.searchBarButton} />
      </form>
    </div>
  );
}
