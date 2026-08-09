import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const URL = "https://api.weatherapi.com/v1/forecast.json";

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!city.trim()) return;

    const controller = new AbortController();
    setStatus("loading");

    axios
      .get(URL, {
        params: { key: API_KEY, q: city, days: 3 },
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data);
        setStatus("success");
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setStatus("error");
        setErrorMessage(
          error.response?.status === 400
            ? "City not found. Try another search."
            : "Something went wrong. Check your connection and try again."
        );
      });

    return () => controller.abort();
  }, [city, retryCount]);

  const retry = useCallback(() => setRetryCount((count) => count + 1), []);

  return { data, status, errorMessage, retry };
}
