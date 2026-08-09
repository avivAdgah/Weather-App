import "../styles/ThemeToggle.css";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className="theme-toggle"
      onClick={() => onToggle(isDark ? "light" : "dark")}
    >
      <span className="theme-toggle-track">
        <i className="fa-solid fa-sun theme-toggle-icon sun" aria-hidden="true" />
        <i className="fa-solid fa-moon theme-toggle-icon moon" aria-hidden="true" />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
