import { formatLocalDateTime } from "../utils/formatTime";
import "../styles/CurrentWeather.css";

export default function CurrentWeather({
  location,
  localtime,
  icon,
  conditionText,
  current,
  unit,
}) {
  const isImperial = unit === "imperial";
  const temp = isImperial ? current.temp_f : current.temp_c;
  const feelsLike = isImperial ? current.feelslike_f : current.feelslike_c;
  const unitLabel = isImperial ? "F" : "C";

  return (
    <section className="current-weather">
      <p className="location-name">{location}</p>
      <p className="location-time">{formatLocalDateTime(localtime)}</p>

      <div className="current-main">
        <span className="current-temp">
          {Math.round(temp)}°{unitLabel}
        </span>
        <img src={icon} alt={conditionText} className="current-icon" />
      </div>

      <p className="current-condition">{conditionText}</p>
      <p className="current-feels-like">
        Feels like {Math.round(feelsLike)}°{unitLabel}
      </p>
    </section>
  );
}
