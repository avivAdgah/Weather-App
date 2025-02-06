import React, { useEffect, useState } from "react";
import "./styles/App.css";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import WeatherLocation from "./WeatherLocation";
import HourlyForecast from './HourlyForecast'
import DailyForecast from "./DailyForecast";
import MaterialUISwitch from "./MaterialUISwitch ";
import Footer from "./Footer";

export default function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("tel aviv");
  const [loading, setLoading] = useState(false);
  const[isChecked, setIsChecked] = useState(false);

  setTimeout(() => setLoading(true), 2000);
  console.log(data);

  useEffect(() => {
    const fetchWeatherCurrent = async (city) => {
      const API_KEY = "d8a778a3568f4e02b07124305241212";
      const URL = `https://api.weatherapi.com/v1/forecast.json`;

      try {
        const response = await axios.get(URL, {
          params: {
            key: API_KEY,
            q: city,
            days: 3,
          },
        });
        setData(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherCurrent(city);
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="warpper" style={{backgroundColor:isChecked?'#030617':'white',transition:'all 5s'}}>
      {loading ? (
        <>
        <div className="header">
          <input type="text" value={city} onChange={handleChange} style={{backgroundColor:isChecked?'#20293A':'#6d6d6e', transition:'all 5s'}}/>
          <MaterialUISwitch isChecked={isChecked} setIsChecked={setIsChecked}/>
        </div>
        <div className="first-section" style={{display:'flex'}}>
            <WeatherLocation
              isChecked={isChecked} 
              temp_c={data.current.temp_c}
              location={data.location.name}
              icon={data.current.condition.icon}
              type={data.current.condition.text}
              feelLike={data.current.feelslike_c}
              wind={data.current.wind_kph}
              minTemp={data.forecast.forecastday[0].day.mintemp_c}
              maxTemp={data.forecast.forecastday[0].day.maxtemp_c}/>
            <HourlyForecast data={data.forecast.forecastday[0].hour} isChecked={isChecked}/>
        </div>
          <DailyForecast data={data.forecast.forecastday} isChecked={isChecked}/>
          <Footer isChecked={isChecked}/>
        </>
      ) : (
        <Box sx={{height:'100vh' }}>
          <CircularProgress sx={{marginTop:'10em' }}/>
        </Box>
      )}
    </div>
  );
}
