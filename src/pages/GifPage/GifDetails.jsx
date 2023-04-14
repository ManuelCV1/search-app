import { useParams } from "react-router-dom";
import { useResources } from "../../Hooks/useResources";
import { DetailsOfGif } from "./DetailsOfGif";
import { SpinnerLoader } from "../../common/SpinnerLoader";
import { NoResults } from "../../common/NoResults";

export function GifDetails() {
  const { gifId } = useParams();
  const [dataGifDetails, , isLoading] = useResources(
    undefined,
    gifId,
    undefined
  );

  if (isLoading === false && dataGifDetails.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      {dataGifDetails.length === 0 ? (
        <SpinnerLoader size={80} />
      ) : (
        <DetailsOfGif dataGifDetails={dataGifDetails} />
      )}
    </div>
  );
}
