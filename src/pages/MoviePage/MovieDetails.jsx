import { useParams } from "react-router-dom";
import { DetailsOfMovie } from "./DetailsOfMovie";
import { useMovieResources } from "../../Hooks/useMovieResources";
import { SpinnerLoader } from "../../common/SpinnerLoader";

export function MovieDetails({ searchKeyword }) {
  const { movieId } = useParams();
  const [data, isLoading] = useMovieResources(`/movie/${movieId}`);
  if (isLoading) {
    return <SpinnerLoader />;
  }

  return (
    <div>
      <DetailsOfMovie data={data} />
    </div>
  );
}
