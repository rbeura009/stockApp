import React, { useContext } from "react";
import useHttp from "../../CustomHooks/useHttp";
import { getTimeSeriesData } from "../../Service/stock";
import classes from "./stockChart.module.css";

const StockChart = ({ symbol }: { symbol: string }) => {
  //   const [apiData, isLoading, error] = useHttp(getTimeSeriesData(symbol), "GET");
  return (
    <div className={classes["stock-chart-container"]}>
      <p>Chart to be displayed here. WIP.</p>
    </div>
  );
};

export default React.memo(StockChart);
