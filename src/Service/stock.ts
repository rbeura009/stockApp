const baseUrl = `https://www.alphavantage.co/query`;

export function getCompanyData(symbol: string) {
  const URL = `${baseUrl}?function==OVERVIEW&symbol=${symbol}&apikey=${process.env.API_KEY}`;
  // return fetch(URL).then((data) => data.json());
  return URL;
}

export function getTimeSeriesData(symbol: string) {
  const URL = `${baseUrl}?function==TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.API_KEY}`;
  // return fetch(URL).then((data) => data.json());
  return URL;
}
export function getPriceInfo(symbol: string) {
  const URL = `${baseUrl}?function==GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.API_KEY}`;
  return fetch(URL).then((data) => data.json());
}
