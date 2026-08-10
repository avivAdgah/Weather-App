import "../styles/UnitToggle.css";

export default function UnitToggle({ unit, onToggle }) {
  const isImperial = unit === "imperial";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isImperial}
      aria-label="Toggle between Celsius and Fahrenheit"
      className="unit-toggle"
      onClick={() => onToggle(isImperial ? "metric" : "imperial")}
    >
      <span className={`unit-toggle-option${!isImperial ? " is-active" : ""}`}>
        °C
      </span>
      <span className={`unit-toggle-option${isImperial ? " is-active" : ""}`}>
        °F
      </span>
    </button>
  );
}
