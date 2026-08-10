import { formatWeekday } from "../utils/formatTime";
import "../styles/DailyForecast.css";

export default function DailyForecast({ days, unit }) {
  const isImperial = unit === "imperial";

  return (
    <section className="daily-forecast">
      <h2 className="section-title">3-Day Forecast</h2>
      <div className="daily-list">
        {days.map((day, index) => {
          const maxTemp = isImperial ? day.day.maxtemp_f : day.day.maxtemp_c;
          const minTemp = isImperial ? day.day.mintemp_f : day.day.mintemp_c;
          return (
            <div className="daily-row" key={day.date}>
              <span className="daily-day">
                {formatWeekday(day.date, index === 0)}
              </span>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <span className="daily-condition">{day.day.condition.text}</span>
              <span className="daily-range">
                <span className="daily-max">{Math.round(maxTemp)}°</span>
                <span className="daily-min">{Math.round(minTemp)}°</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
