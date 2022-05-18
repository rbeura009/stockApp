import React, { useEffect, useMemo, useState } from "react";
import useHttp from "../../CustomHooks/useHttp";
import { getTimeSeriesData } from "../../Service/stock";
import classes from "./stockChart.module.css";
import "./stockChart.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Loader from "../../UI-Components/Loader/loading";

let TimeInit: any[] = [],
  PriceInit: any[] = [];
const StockChart = ({ symbol }: { symbol: string }) => {
  const [timeSeriesData, setTimeSeriesData] = useState(null);
  const [Time, setTime] = useState(TimeInit);
  const [Price, setPrice] = useState(PriceInit);
  const { isLoading, error, sendRequest }: any = useHttp();

  useEffect(() => {
    if (symbol) {
      sendRequest(getTimeSeriesData(symbol), "GET", null, (data: any) => {
        let Time: any[] = [],
          Price: any[] = [];
        Object.keys(data["Time Series (5min)"]).forEach((key: string) => {
          Price.push(+data["Time Series (5min)"][key]["1. open"]);
          Time.push(key);
        });
        setTime(Time);
        setPrice(Price);
        setTimeSeriesData(data);
      });
    }
  }, [symbol, sendRequest]);

  const options = useMemo(
    () => ({
      title: {
        text: timeSeriesData
          ? `${timeSeriesData["Meta Data"]["2. Symbol"]} (${timeSeriesData["Meta Data"]["4. Interval"]})`
          : "",
      },

      subtitle: {
        text: timeSeriesData
          ? `Last Refreshed : ${timeSeriesData["Meta Data"]["3. Last Refreshed"]}`
          : "",
      },

      yAxis: {
        title: {
          text: "Price",
        },
      },

      xAxis: {
        title: {
          text: "Time",
        },
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          data: Time,
        },
      },

      series: [
        {
          name: timeSeriesData
            ? `${timeSeriesData["Meta Data"]["2. Symbol"]}`
            : "Stock",
          data: Price,
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 768,
            },
            chartOptions: {
              legend: {
                enabled: false,
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    }),
    [Price, Time, timeSeriesData]
  );

  return (
    <div className={classes["stock-chart-container"]}>
      {isLoading || error ? (
        <Loader
          loading={isLoading ? true : false}
          errorMessage={error ? error : ""}
        />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          style={{ innerHeight: "100%", innerWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default React.memo(StockChart);
