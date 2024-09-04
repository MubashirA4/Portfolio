import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='container'>
      <footer>
        <div className="links">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about_me">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="icons">
            <FaInstagram size={20} />
            <LuLinkedin size={20} />
            <FiGithub size={20} />
            <FiFacebook size={20} />
          </div>
        </div>
        <div className="btl">
          <div className="iwt">
            <h2>Interested in working together<b>?</b></h2>
            <div className="iwt-btn">
              <div className="btns">
                <button className="git">Get in Touch</button>
                <button className='bp'>Browse Projects</button>
              </div>
              <div className="olr">
                <p>@2024 All Rights Reserved. <br /> Made by Mubashir Ahmad</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
export default Footer