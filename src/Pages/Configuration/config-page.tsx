import React, { useContext, useRef } from "react";
import { appContext } from "../../Context/app.context";
import Button from "../../UI-Components/Button";
import classes from "./config-page.module.css";

const ConfigPage = () => {
  const ctx: any = useContext(appContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const saveRefreshInterval = () => {
    let intervalStr: string = inputRef?.current?.value || "20000";
    let interval = parseInt(intervalStr);
    ctx.setStockPriceRefreshInterval(interval);
  };
  return (
    <div className="page">
      <h1>Configuration</h1>
      <section className={classes["config-section"]}>
        <div className={classes["config-section-row"]}>
          <label htmlFor="refresh-interval-config">
            Specify stock refresh interval:
          </label>
          <input id="refresh-interval-config" ref={inputRef} />
        </div>
      </section>

      <div>
        <Button variant="primary" onClick={saveRefreshInterval}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ConfigPage;
