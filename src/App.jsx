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
  const [city, setCity] = useState("Tel Aviv");
  const [theme, setTheme] = useState("light");
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
              tempC={data.current.temp_c}
              icon={data.current.condition.icon}
              conditionText={data.current.condition.text}
              feelsLikeC={data.current.feelslike_c}
            />
            <WeatherDetails
              windKph={data.current.wind_kph}
              humidity={data.current.humidity}
              visibilityKm={data.current.vis_km}
              uv={data.current.uv}
              pressureMb={data.current.pressure_mb}
            />
          </div>

          {status === "error" && <ErrorState message={errorMessage} />}

          <HourlyForecast
            hours={data.forecast.forecastday[0].hour}
            localtime={data.location.localtime}
          />
          <DailyForecast days={data.forecast.forecastday} />
        </main>
      )}

      <Footer />
    </div>
  );
}
