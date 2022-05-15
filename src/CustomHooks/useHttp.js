import { useEffect, useMemo, useState } from "react";

const config = {};

const useHttp = (URL, method = "GET", body) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  config.method = method;

  useEffect(() => {
    setIsloading(true);

    fetch(URL, config)
      .then((data) => data.json())
      .then((data) => {
        setApiData(data);
        setIsloading(false);
      })
      .catch((error) => setError(error));
  }, [URL, method]);

  return [apiData, isLoading, error];
};

export default useHttp;
