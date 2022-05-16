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
  const [stockDetails, setStockDetails] = useState(null);
  const { isLoading, error, sendRequest }: any = useHttp();

  useEffect(() => {
    if (params.stock) {
      sendRequest(getCompanyData(params.stock), "GET", null, (data: any) => {
        setStockDetails(data);
      });
    }
  }, [params.stock, sendRequest]);

  return (
    <div className="stock-details" style={{ padding: "2rem", height: "100%" }}>
      {isLoading || error ? (
        <Loader
          loading={isLoading ? true : false}
          errorMessage={error ? error : ""}
        />
      ) : isEmptyObject(stockDetails) ? (
        <NoData symbol={params.stock} />
      ) : (
        <StockDetails details={stockDetails} />
      )}
    </div>
  );
};

export default StockDetailsContainer;
