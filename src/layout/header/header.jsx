import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    // Toggle showIcon when the menu is opened or closed
    setShowIcon(showMenu ? false : true);
  };
  return (
    <div className="container">
      <header>
        <div className="logo">
          <Link to="/" >MBH<span>.</span></Link>
        </div>
        <div className='bar_menu' onClick={handleMenuClick}>
          {showMenu == true ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav_links ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
          <nav >
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about_me">About</Link></li>
              <div className="logo-msg" >
                <Link to="/contact">
                  {showIcon  ? (<span>Get in touch</span>) : (<BiMessageSquareDetail className='msg' />)}
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </header >
    </div >
  )
}

export default Header