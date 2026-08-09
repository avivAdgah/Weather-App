import "../styles/WeatherDetails.css";

export default function WeatherDetails({
  windKph,
  humidity,
  visibilityKm,
  uv,
  pressureMb,
}) {
  const details = [
    { icon: "fa-wind", label: "Wind", value: `${windKph} km/h` },
    { icon: "fa-droplet", label: "Humidity", value: `${humidity}%` },
    { icon: "fa-eye", label: "Visibility", value: `${visibilityKm} km` },
    { icon: "fa-sun", label: "UV Index", value: uv },
    { icon: "fa-gauge", label: "Pressure", value: `${pressureMb} mb` },
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
