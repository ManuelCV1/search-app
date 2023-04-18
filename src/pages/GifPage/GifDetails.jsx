import { Navigate, useParams } from "react-router-dom";
import { useGifResources } from "../../Hooks/useGifResources";
import { DetailsOfGif } from "./DetailsOfGif";
import { SpinnerLoader } from "../../common/SpinnerLoader";

export function GifDetails({ searchKeyword }) {
  const { gifId } = useParams();
  const [dataGifDetails, , isLoading] = useGifResources(
    undefined,
    gifId,
    undefined
  );

  if (searchKeyword) {
    return <Navigate replace="false" to="/gifs" />;
  }
  if (isLoading) {
    return <SpinnerLoader />;
  }

  return (
    <div>
      <DetailsOfGif dataGifDetails={dataGifDetails} />
    </div>
  );
}
