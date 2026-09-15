import React from 'react'
import {NavLink} from 'react-router-dom'
import './Css/Header.css'

const Header = () => {
  return (
    <>
        <div className="header-outer">
            <div className="header-logo">
                <img src="/image/logo.jpg" alt="hello" />
            </div>
            <ul>
                <NavLink className={({isActive})=>`navlink ${isActive? "navActive":""}`} to='/'><li>Home</li></NavLink>
                <NavLink className={({isActive})=>`navlink ${isActive? "navActive":""}`}><li>About</li></NavLink>
                <NavLink className={({isActive})=>`navlink ${isActive? "navActive":""}`}><li>Services</li></NavLink>
                <NavLink className={({isActive})=>`navlink ${isActive? "navActive":""}`}><li>Calculators</li></NavLink>
                <NavLink className={({isActive})=>`navlink ${isActive? "navActive":""}`}><li>Contact</li></NavLink>
            </ul>
            <div className="header-search">
                <input type="search" placeholder='Search Your.........' />
            </div>
            <button>Login/Signup</button>
        </div>
    </>
  )
}

export default Header