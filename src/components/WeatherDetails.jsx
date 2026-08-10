import "../styles/WeatherDetails.css";

export default function WeatherDetails({ current, unit }) {
  const isImperial = unit === "imperial";
  const wind = isImperial
    ? `${Math.round(current.wind_mph)} mph`
    : `${Math.round(current.wind_kph)} km/h`;
  const visibility = isImperial
    ? `${current.vis_miles} mi`
    : `${current.vis_km} km`;
  const pressure = isImperial
    ? `${current.pressure_in} in`
    : `${current.pressure_mb} mb`;

  const details = [
    { icon: "fa-wind", label: "Wind", value: wind },
    { icon: "fa-droplet", label: "Humidity", value: `${current.humidity}%` },
    { icon: "fa-eye", label: "Visibility", value: visibility },
    { icon: "fa-sun", label: "UV Index", value: current.uv },
    { icon: "fa-gauge", label: "Pressure", value: pressure },
  ];

  return (
    <section className="weather-details" aria-label="Weather details">
      {details.map((detail) => (
        <div className="detail-card" key={detail.label}>
          <i className={`fa-solid ${detail.icon}`} aria-hidden="true" />
          <span className="detail-label">{detail.label}</span>
          <span className="detail-value">{detail.value}</span>
        </div>
      ))}
    </section>
  );
}
