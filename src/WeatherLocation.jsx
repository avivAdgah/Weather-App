import React from 'react'
import './styles/WeatherLocation.css'

export default function WeatherLocation({isChecked, temp_c, location, icon, type,feelLike, wind, minTemp ,maxTemp}) {
  return (
    <div className='current-warpper' style={{backgroundColor:isChecked?'#20293A':'#838383', transition:'all 5s'}}>
        <div className='first-section'>
          <h1>{temp_c} °C</h1>
          <img src={icon} alt="weather-icon" />
          <span style={{color:isChecked?'#646D7F':'black',transition:'all 5s'}}>{type}</span>
          <p>feels like {feelLike} °C</p>
        </div>
        <div className='second-section'>
          <h1>{location}</h1>
          <p><i class="fa-solid fa-wind" style={{color:"#107DD8"}}></i> {wind} K/H</p>
          {/* <FontAwesomeIcon icon="fa-solid fa-wind" /> */}
          <p>{minTemp} °C to {maxTemp} °C</p>
        </div>
    </div>
  )
}
