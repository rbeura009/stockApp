import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../Context/appContext";
import { getPriceInfo } from "../../Service/stock";
import StockChart from "../StockChart/stockChart";
import classes from "./stockDetails.module.css";

const StockDetails = (props: any) => {
  const [stockPriceData, setStockPriceData] = useState(null);
  let isNagative = false;
  const ctx = useContext(appContext);

  useEffect(() => {
    // let interval = setInterval(() => {
    getData(props.details?.Symbol);
    /*   }, ctx.stockPriceRefreshInterval);
    return () => {
      clearInterval(interval);
    }; */
  }, [props.details?.Symbol]);

  const getData = (symbol: string) => {
    getPriceInfo(symbol).then((data) => {
      setStockPriceData(data);
    });
  };

  if (
    stockPriceData &&
    stockPriceData["Global Quote"] &&
    +stockPriceData["Global Quote"]["09. change"] < 0
  ) {
    isNagative = true;
  }

  return (
    <div className="stock-details">
      <div className={classes["name-container"]}>
        <h1>
          {props.details?.Name} ({props.details?.Symbol})
        </h1>

        <div className={classes["sector-text"]}>
          Sector: {props.details?.Industry}
        </div>
      </div>

      <div className={classes["price-chart-container"]}>
        <div className={classes["price-container"]}>
          {stockPriceData && stockPriceData["Global Quote"] && (
            <div>
              <p className={classes["stock-price"]}>
                {stockPriceData["Global Quote"]["05. price"]
                  ? parseFloat(
                      stockPriceData["Global Quote"]["05. price"]
                    ).toFixed(2)
                  : ""}
              </p>

              <div
                className={`${classes["stock-price-change-container"]} ${
                  isNagative ? classes["red"] : classes["green"]
                }`}
              >
                {isNagative ? (
                  <span className={classes["red-down-arrow"]}></span>
                ) : (
                  <span className={classes["green-up-arrow"]}></span>
                )}
                <span className={classes["stock-price-change"]}>
                  {stockPriceData["Global Quote"]["09. change"]
                    ? parseFloat(
                        stockPriceData["Global Quote"]["09. change"]
                      ).toFixed(2)
                    : ""}
                </span>
                (
                <span className={classes["stock-price-change-pc"]}>
                  {stockPriceData["Global Quote"]["10. change percent"]
                    ? parseFloat(
                        stockPriceData["Global Quote"]["10. change percent"]
                      ).toFixed(2) + "%"
                    : ""}
                </span>
                )
              </div>
            </div>
          )}
        </div>

        <StockChart symbol={props.details?.Symbol} />
      </div>

      <div className={classes["description"]}>
        <span className={classes["title"]}>Description:</span>
        {props.details?.Description}
      </div>

      {stockPriceData && stockPriceData["Global Quote"] && (
        <div className={classes["stock-details-data-container"]}>
          <div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>Open</div>
              <div>{stockPriceData["Global Quote"]["02. open"]}</div>
            </div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>Previous Close</div>
              <div>{stockPriceData["Global Quote"]["08. previous close"]}</div>
            </div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>Volume</div>
              <div>{stockPriceData["Global Quote"]["06. volume"]}</div>
            </div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>P/E Ratio</div>
              <div>{props.details?.PERatio}</div>
            </div>
          </div>
          <div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>High</div>
              <div>{stockPriceData["Global Quote"]["03. high"]}</div>
            </div>
            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>Low</div>
              <div>{stockPriceData["Global Quote"]["04. low"]}</div>
            </div>

            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>P/E Ratio</div>
              <div>{props.details?.PERatio}</div>
            </div>

            <div className={classes["details-row-item"]}>
              <div className={classes["title"]}>Market Capitilization</div>
              <div>{props.details?.MarketCapitalization}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(StockDetails);
