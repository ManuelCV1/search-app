import { useParams } from "react-router-dom";
import { useResources } from "../../Hooks/useResources";
import { DetailsOfGif } from "./DetailsOfGif";
import { SpinnerLoader } from "../../SpinnerLoader";
import { NoResults } from "../../NoResults";

export function GifDetails() {
  const { gifId } = useParams();
  const [dataGifDetails, ,isLoading] = useResources(undefined, gifId , undefined);

  console.log(isLoading)

  if (isLoading === false && dataGifDetails.length===0) {
    return <NoResults />
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
