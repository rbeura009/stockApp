import React from "react";
import classes from "./nodata.module.css";

const NoData = ({ symbol }: { symbol: string }) => {
  return (
    <section
      className={classes["nodata-container"]}
      data-testid="nodata-container"
    >
      <div>
        <h1>Could not find any data for {symbol}</h1>
      </div>
    </section>
  );
};

export default NoData;
