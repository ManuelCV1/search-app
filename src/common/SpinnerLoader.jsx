import { ImSpinner10 } from "react-icons/im";
import style from "./SpinnerLoader.module.css";
export function SpinnerLoader() {
  return (
    <div className={style.spinnerContainer}>
      <ImSpinner10 size={100} className={style.spinnerElement} />
      <p>Loading...</p>
    </div>
  );
}
