function toDate(apiDateTime) {
  return new Date(apiDateTime.replace(" ", "T"));
}

export function formatHourLabel(apiDateTime) {
  return apiDateTime.split(" ")[1];
}

export function getHourOfDay(apiDateTime) {
  return toDate(apiDateTime).getHours();
}

export function formatWeekday(apiDate, isFirstDay) {
  if (isFirstDay) return "Today";
  return toDate(apiDate).toLocaleDateString("en-US", { weekday: "long" });
}

export function formatLocalDateTime(apiDateTime) {
  const date = toDate(apiDateTime);
  const dateLabel = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const timeLabel = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dateLabel} · ${timeLabel}`;
}
