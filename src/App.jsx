import { useCallback, useState } from "react";
import { useWeather } from "./hooks/useWeather";
import { getWeatherTheme } from "./utils/weatherTheme";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import Loader from "./components/Loader";
import ErrorState from "./components/ErrorState";
import Footer from "./components/Footer";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/App.css";

export default function App() {
  const [city, setCity] = useState("Jerusalem");
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("metric");
  const { data, status, errorMessage, retry } = useWeather(city);

  const handleCityChange = useCallback((nextCity) => setCity(nextCity), []);

  const weatherTheme = data
    ? getWeatherTheme(data.current.condition.code, data.current.is_day)
    : null;

  return (
    <div className="app" data-theme={theme} data-weather={weatherTheme}>
      <Header
        onCityChange={handleCityChange}
        theme={theme}
        onToggleTheme={setTheme}
        unit={unit}
        onUnitChange={setUnit}
      />

      {status === "loading" && !data && <Loader />}

      {status === "error" && !data && (
        <ErrorState fullPage message={errorMessage} onRetry={retry} />
      )}

      {data && (
        <main className="dashboard">
          <div className="hero-row">
            <CurrentWeather
              location={data.location.name}
              localtime={data.location.localtime}
              icon={data.current.condition.icon}
              conditionText={data.current.condition.text}
              current={data.current}
              unit={unit}
            />
            <WeatherDetails current={data.current} unit={unit} />
          </div>

          {status === "error" && <ErrorState message={errorMessage} />}

          <HourlyForecast
            hours={data.forecast.forecastday[0].hour}
            localtime={data.location.localtime}
            unit={unit}
          />
          <DailyForecast days={data.forecast.forecastday} unit={unit} />
        </main>
      )}

      <Footer />
    </div>
  );
}
