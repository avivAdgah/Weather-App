import "../styles/ErrorState.css";

export default function ErrorState({ message, onRetry, fullPage }) {
  if (fullPage) {
    return (
      <div className="error-fullpage" role="alert">
        <i className="fa-solid fa-cloud-bolt" aria-hidden="true" />
        <p>{message}</p>
        {onRetry && (
          <button type="button" className="error-retry" onClick={onRetry}>
            Try again
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="error-banner" role="alert">
      <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
