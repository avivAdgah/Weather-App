import React from 'react'
import './styles/HourlyForecast.css'

export default function HourlyForecast({data,isChecked}) {

  return (
    <div className='hourly-warpper'>
        {data.map((item,index)=>(
          <>{parseInt(item.time.split(" ")[1].split(":")[0], 10)%4===0?(
            <ul key={index} className='weather-list' style={{backgroundColor:isChecked?'#20293A':'#838383', transition:'all 5s'}}>
              <li>{ item.time.split(" ")[1]}</li>
              <li className='image'><img src={item.condition.icon} alt="" /> <span>{item.condition.text}</span></li>
              <li>{item.temp_c}</li>
        </ul>
          ):(null)}</>
        ))}
    </div>
  )
}
