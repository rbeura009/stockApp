import React, { useEffect, useState } from "react";
import useHttp from "../../CustomHooks/useHttp";
import { getTimeSeriesData } from "../../Service/stock";
import classes from "./stockChart.module.css";

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

const StockChart = ({ symbol }: { symbol: string }) => {
  // const [timeSeriesData, setTimeSeriesData] = useState(null);
  // const { isLoading, error, sendRequest }: any = useHttp();
  // let ohlc: any[] = [],
  //   volume: any[] = [];

  // useEffect(() => {
  //   if (symbol) {
  //     sendRequest(getTimeSeriesData(symbol), "GET", null, (data: any) => {
  //       Object.keys(data["Time Series (5min)"]).forEach((key) => {
  //         ohlc.push([
  //           key, // the date
  //           data["Time Series (5min)"]["1. open"], // open
  //           data["Time Series (5min)"]["2. high"], // high
  //           data["Time Series (5min)"]["3. low"], // low
  //           data["Time Series (5min)"]["4. close"], // close
  //         ]);
  //         volume.push([
  //           key, // the date
  //           data["Time Series (5min)"]["5. volume"], // the volume
  //         ]);
  //       });
  //       setTimeSeriesData(data);
  //     });
  //   }
  // }, [symbol, sendRequest]);

  // const options = {
  //   yAxis: [
  //     {
  //       labels: {
  //         align: "left",
  //       },
  //       height: "80%",
  //       resize: {
  //         enabled: true,
  //       },
  //     },
  //     {
  //       labels: {
  //         align: "left",
  //       },
  //       top: "80%",
  //       height: "20%",
  //       offset: 0,
  //     },
  //   ],
  //   tooltip: {
  //     shape: "square",
  //     headerShape: "callout",
  //     borderWidth: 0,
  //     shadow: false,
  //     // positioner: function (width, height, point) {
  //     //     var chart = this.chart,
  //     //         position;

  //     //     if (point.isHeader) {
  //     //         position = {
  //     //             x: Math.max(
  //     //                 // Left side limit
  //     //                 chart.plotLeft,
  //     //                 Math.min(
  //     //                     point.plotX + chart.plotLeft - width / 2,
  //     //                     // Right side limit
  //     //                     chart.chartWidth - width - chart.marginRight
  //     //                 )
  //     //             ),
  //     //             y: point.plotY
  //     //         };
  //     //     } else {
  //     //         position = {
  //     //             x: point.series.chart.plotLeft,
  //     //             y: point.series.yAxis.top - chart.plotTop
  //     //         };
  //     //     }

  //     //     return position;
  //     // }
  //   },
  //   series: [
  //     {
  //       type: "ohlc",
  //       id: "aapl-ohlc",
  //       name: "AAPL Stock Price",
  //       data: ohlc,
  //     },
  //     {
  //       type: "column",
  //       id: "aapl-volume",
  //       name: "AAPL Volume",
  //       data: volume,
  //       yAxis: 1,
  //     },
  //   ],
  //   responsive: {
  //     rules: [
  //       {
  //         condition: {
  //           maxWidth: 800,
  //         },
  //         chartOptions: {
  //           rangeSelector: {
  //             inputEnabled: false,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <div className={classes["stock-chart-container"]}>
      <p>Chart to be displayed here. WIP.</p>
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
    </div>
  );
};

export default React.memo(StockChart);
