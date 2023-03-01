import { CardComponent } from "./CardComponent";
import style from "./GridComponent.module.css";
import { NoResults } from "./NoResults";


export function GridComponent({ dataGifs, detailRute, isLoading }) {

  if (isLoading === false && dataGifs.length === 0) {
    return <NoResults />
  }

  return (
    <div>
      <ul className={style.grid}>
        {dataGifs.map((img) => (
          <CardComponent img={img} detailRute={detailRute} key={img.id} />
        ))}
      </ul>
    </div>
  );
}
