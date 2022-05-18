import classes from "./loading.module.css";
import Spinner from "../../Assets/Icons/Spinner.svg";

const Loader = ({
  loading,
  errorMessage = "Uh Oh!! An Unknown Error occurred",
}: {
  loading: boolean;
  errorMessage: string;
}) => {
  return (
    <div className={classes["loader"]}>
      {loading ? (
        <img src={Spinner} alt="loading" />
      ) : (
        <p className={classes["error-message"]}>
          {errorMessage || "Uh Oh!! An Unknown Error occurred"}
        </p>
      )}
    </div>
  );
};

export default Loader;
