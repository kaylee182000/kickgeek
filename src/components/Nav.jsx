import React from 'react'
import "./css/nav.css"
import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <nav className='navbar d-flex flex-row justify-content-evenly align-items-center'>
      <NavLink className="link" to='/'>Home</NavLink>
      <NavLink className="link" to='/about'>About</NavLink>
      <NavLink className="link" to='/product'>Footwear</NavLink>
    </nav>
  )
}
