import { formatLocalDateTime } from "../utils/formatTime";
import "../styles/CurrentWeather.css";

export default function CurrentWeather({
  location,
  localtime,
  tempC,
  icon,
  conditionText,
  feelsLikeC,
}) {
  return (
    <section className="current-weather">
      <p className="location-name">{location}</p>
      <p className="location-time">{formatLocalDateTime(localtime)}</p>

      <div className="current-main">
        <span className="current-temp">{Math.round(tempC)}°</span>
        <img src={icon} alt={conditionText} className="current-icon" />
      </div>

      <p className="current-condition">{conditionText}</p>
      <p className="current-feels-like">Feels like {Math.round(feelsLikeC)}°</p>
    </section>
  );
}
