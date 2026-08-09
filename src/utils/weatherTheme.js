const CLOUDY_CODES = new Set([1003, 1006, 1009]);
const FOG_CODES = new Set([1030, 1135, 1147]);
const SNOW_CODES = new Set([
  1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258,
  1261, 1264,
]);
const RAIN_CODES = new Set([
  1063, 1069, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
  1195, 1198, 1201, 1240, 1243, 1246,
]);
const THUNDER_CODES = new Set([1087, 1273, 1276, 1279, 1282]);

function getConditionBucket(code) {
  if (THUNDER_CODES.has(code)) return "thunder";
  if (SNOW_CODES.has(code)) return "snow";
  if (RAIN_CODES.has(code)) return "rain";
  if (FOG_CODES.has(code)) return "fog";
  if (CLOUDY_CODES.has(code)) return "cloudy";
  return "clear";
}

export function getWeatherTheme(conditionCode, isDay) {
  const bucket = getConditionBucket(conditionCode);
  const period = isDay ? "day" : "night";
  return `${bucket}-${period}`;
}
