import { formatWeekday } from "../utils/formatTime";
import "../styles/DailyForecast.css";

export default function DailyForecast({ days }) {
  return (
    <section className="daily-forecast">
      <h2 className="section-title">3-Day Forecast</h2>
      <div className="daily-list">
        {days.map((day, index) => (
          <div className="daily-row" key={day.date}>
            <span className="daily-day">
              {formatWeekday(day.date, index === 0)}
            </span>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <span className="daily-condition">{day.day.condition.text}</span>
            <span className="daily-range">
              <span className="daily-max">{Math.round(day.day.maxtemp_c)}°</span>
              <span className="daily-min">{Math.round(day.day.mintemp_c)}°</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
