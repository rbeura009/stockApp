import { useCallback, useState } from "react";

const config = {};

const useHttp = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback((URL, method = "GET", body, applyData) => {
    setIsloading(false);
    setError("");

    config.method = method;

    fetch(URL, config)
      .then((data) => data.json())
      .then((data) => {
        if (data["Error Message"] || data["note"]) {
          throw new Error(data["Error Message"] || data["note"]);
        } else {
          applyData(data);
        }
        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message || error);
        setIsloading(false);
      });
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
