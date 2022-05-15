import classes from "./loading.module.css";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={classes["loader"]}>
      {loading ? "Loading..." : "Some Error Occored"}
    </div>
  );
};

export default Loader;
