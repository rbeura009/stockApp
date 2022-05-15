import classes from "./welcome.module.css";

const Welcome = ({ appName }: { appName: string }) => {
  return (
    <section className={classes["welcome-container"]}>
      <div>
        <h1>Welcome to {appName}</h1>
        <div>We Can display various index, Market Actions, News etc. here.</div>
      </div>
    </section>
  );
};

export default Welcome;
