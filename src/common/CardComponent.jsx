import { Link } from "react-router-dom";
import estilos from "./CardComponent.module.css";
import placeHolder from "./placeHolder.png";

export function CardComponent({ img, detailRute }) {
  return (
    <Link to={detailRute + img.id}>
      <li className={estilos.card} key={img.id}>
        <img
          className={estilos.imagen}
          alt={img.title}
          src={
            detailRute === "/gifs/details/"
              ? img.images.downsized.url || placeHolder
              : img.poster_path === null || undefined
              ? placeHolder
              : `https://image.tmdb.org/t/p/w300${img.poster_path}`
          }
        ></img>
        <p className={estilos.titulo}>{img.title}</p>
      </li>
    </Link>
  );
}
