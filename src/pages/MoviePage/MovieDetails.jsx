import { Navigate, useParams } from "react-router-dom";
import { DetailsOfMovie } from "./DetailsOfMovie";
import { useMovieResources } from "../../Hooks/useMovieResources";
import { SpinnerLoader } from "../../common/SpinnerLoader";
import { FooterArrow } from "../../common/FooterArrow";

export function MovieDetails({ searchKeyword }) {
  const { movieId } = useParams();
  const [data, isLoading] = useMovieResources(`/movie/${movieId}`);

  if (searchKeyword) {
    return <Navigate replace="false" to="/movies" />;
  }

  if (isLoading) {
    return <SpinnerLoader />;
  }

  return (
    <div>
      <DetailsOfMovie data={data} />
      <FooterArrow layout="detail" />
    </div>
  );
}
