import React, { useContext } from "react";
import useHttp from "../../CustomHooks/useHttp";
import { getTimeSeriesData } from "../../Service/stock";
import classes from "./stockChart.module.css";

const StockChart = ({ symbol }: { symbol: string }) => {
  //   const [apiData, isLoading, error] = useHttp(getTimeSeriesData(symbol), "GET");
  //   console.log(apiData);
  return <div className={classes["stock-chart-container"]}></div>;
};

export default React.memo(StockChart);
