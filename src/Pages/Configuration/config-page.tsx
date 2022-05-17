import React, { useContext, useRef } from "react";
import { appContext } from "../../Context/appContext";

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
      <section>
        <div className="">
          <label htmlFor="refresh-interval">
            Specify stock refresh interval
          </label>
          <input id="refresh-interval" ref={inputRef} />
        </div>
      </section>

      <div>
        <button onClick={saveRefreshInterval}>Save</button>
      </div>
    </div>
  );
};

export default ConfigPage;
