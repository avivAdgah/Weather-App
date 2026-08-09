import { formatHourLabel, getHourOfDay } from "../utils/formatTime";
import "../styles/HourlyForecast.css";

export default function HourlyForecast({ hours, localtime }) {
  const currentHour = getHourOfDay(localtime);
  const remainingHours = hours.filter(
    (hour) => getHourOfDay(hour.time) >= currentHour
  );

  return (
    <section className="hourly-forecast">
      <h2 className="section-title">Today</h2>
      <div className="hourly-scroll">
        {remainingHours.map((hour) => {
          const isNow = getHourOfDay(hour.time) === currentHour;
          return (
            <div
              key={hour.time}
              className={`hourly-card${isNow ? " is-now" : ""}`}
            >
              <span className="hourly-time">
                {isNow ? "Now" : formatHourLabel(hour.time)}
              </span>
              <img src={hour.condition.icon} alt={hour.condition.text} />
              <span className="hourly-temp">{Math.round(hour.temp_c)}°</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
