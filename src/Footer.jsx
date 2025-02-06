import React from 'react'
import './styles/Footer.css'

export default function Footer({isChecked}) {
  return (
    <footer className='footer'>
      <p className='footer-text' style={{backgroundColor:isChecked?'#20293A':'#7D7E7F',transition:'all 5s'}}>&copy; {new Date().getFullYear()} Aviv Adgah. All rights reserved.</p>
    </footer>
  )
}
