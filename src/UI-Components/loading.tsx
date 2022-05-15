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
      {loading && "Loading..."}
      {!loading && errorMessage && errorMessage}
    </div>
  );
};

export default Loader;
