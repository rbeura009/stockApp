import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../CustomHooks/useHttp";
import { getCompanyData } from "../../Service/stock";
import Loader from "../../UI-Components/loading";
import { isEmptyObject } from "../../Utils/commonUtils";
import NoData from "../NoDataFound";
import StockDetails from "./stockDetails";

const StockDetailsContainer = () => {
  const params = useParams() as { stock: string };
  // const [stock, setStock] = useState("");
  const [apiData, isLoading, error] = useHttp(
    getCompanyData(params.stock),
    "GET"
  );
  let stockDetails = apiData;
  /*  useEffect(() => {
    if (params.stock !== stock) {
      setStock(params.stock);
      getStockDetails(params.stock);
    }
  }, [params.stock, stock]);

  const getStockDetails = (symbol: string) => {
    getCompanyData(symbol).then((details) => {
      setStockDetails(details);
    });
  }; */

  return (
    <div className="stock-details" style={{ padding: "2rem", height: "100%" }}>
      {isLoading || error ? (
        <Loader loading={isLoading ? true : false} />
      ) : isEmptyObject(stockDetails) ? (
        <NoData symbol={params.stock} />
      ) : (
        <StockDetails details={stockDetails} />
      )}
    </div>
  );
};

export default StockDetailsContainer;
