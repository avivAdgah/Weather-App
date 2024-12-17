import React from 'react'
import './styles/DailyForecast.css'

export default function DailyForecast({data,isChecked}) {
  return (
    <div className='daily-warpper'>
      <p>3 day forecast</p>
        {data.map((item, index)=>(
            <ul key={index} className='daily-list' style={{backgroundColor:isChecked?'#20293A':'#838383', transition:'all 5s'}}>
                <li>{new Date(item.date).toLocaleDateString('en-US',{weekday:'long'})}</li>
                <li><img src={item.day.condition.icon} alt="" /> <span>{item.day.condition.text}</span></li>
                <li>{item.day.avgtemp_c}</li>
            </ul>
        ))}
    </div>
  )
}
