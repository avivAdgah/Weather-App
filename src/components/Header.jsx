import { useEffect, useState } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.css";

export default function Header({ onCityChange, theme, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      onCityChange(debouncedQuery.trim());
    }
  }, [debouncedQuery, onCityChange]);

  return (
    <header className="app-header">
      <span className="app-title">Weather Dashboard</span>

      <form
        className="search-form"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="city-search" className="visually-hidden">
          Search city
        </label>
        <i className="fa-solid fa-magnifying-glass search-icon" aria-hidden="true" />
        <input
          id="city-search"
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
