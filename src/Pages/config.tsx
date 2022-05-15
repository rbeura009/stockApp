import React, { useContext, useRef, useState } from "react";
import { appContext } from "../Context/appContext";

const ConfigPage = () => {
  const ctx: any = useContext(appContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const saveRefreshInterval = () => {
    let intervalStr: string = inputRef?.current?.value || "20000";
    let interval = parseInt(intervalStr);
    ctx.setStockPriceRefreshInterval(interval);
  };
  return (
    <div>
      <div>Specify stock refresh interval</div>
      <input ref={inputRef} />
      <button onClick={saveRefreshInterval}>Save</button>
    </div>
  );
};

export default ConfigPage;
