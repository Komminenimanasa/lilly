import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav className='navbar'>
            <a id='logo'>TRUE<span>CARE +</span></a>
            <Link to="/">Home</Link>
            <Link to="/doctor">Doctor</Link>
            <Link to="/patient">Patient</Link>
        </nav>
      
    </div>
  )
}

export default Navigation