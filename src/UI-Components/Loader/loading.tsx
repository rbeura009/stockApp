import classes from "./loading.module.css";

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
        "Loading..."
      ) : (
        <p className={classes["error-message"]}>
          {errorMessage || "Uh Oh!! An Unknown Error occurred"}
        </p>
      )}
    </div>
  );
};

export default Loader;
