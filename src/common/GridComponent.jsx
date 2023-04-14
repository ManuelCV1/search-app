import { CardComponent } from "./CardComponent";
import style from "./GridComponent.module.css";
import { NoResults } from "./NoResults";

export function GridComponent({ data = [], detailRute, isLoading }) {
  if (isLoading === false && data.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      <ul className={style.grid}>
        {data.map((img) => (
          <CardComponent img={img} detailRute={detailRute} key={img.id} />
        ))}
      </ul>
    </div>
  );
}
