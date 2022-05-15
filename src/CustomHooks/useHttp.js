import { useEffect, useMemo, useState } from "react";

const config = {};

const useHttp = (URL, method = "GET", body) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState(null);

  config.method = method;

  useEffect(() => {
    setIsloading(true);

    fetch(URL, config)
      .then((data) => data.json())
      .then((data) => {
        if (data["Error Message"] || data["note"]) {
          throw new Error(data["Error Message"] || data["note"]);
        } else {
          setApiData(data);
        }

        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message || error);
        setIsloading(false);
      });
  }, [URL, method]);

  return [apiData, isLoading, error];
};

export default useHttp;
