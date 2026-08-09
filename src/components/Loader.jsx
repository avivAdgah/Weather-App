import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <span className="spinner" />
      <span className="visually-hidden">Loading weather data…</span>
    </div>
  );
}
