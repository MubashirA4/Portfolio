import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <h2>MBH</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about_me">About</Link></li>
          </ul>
        </nav>
        <div className="logo-msg">
          <Link to=""><BiMessageSquareDetail className='msg'/></Link>
        </div>
      </header>
    </div>
  )
}

export default Header