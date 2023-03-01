import { Link } from "react-router-dom";
import estilos from "./CardComponent.module.css";
import placeHolder from "./placeHolder.png"

export function CardComponent({ img, detailRute }) {
  return (
    <Link to={detailRute+img.id}>
      <li className={estilos.card} key={img.id}>
        <img
          className={estilos.imagen}
          alt={img.title}
          src={img.images.downsized.url || placeHolder}
        ></img>
        <p className={estilos.titulo}>{img.title}</p>
      </li>
    </Link>
  );
}
