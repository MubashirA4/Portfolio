import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";
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
            <Link to="https://www.instagram.com/mubashir_1520/?hl=en" target='blank'><FaInstagram size={24} /></Link> 
            <Link to="https://www.linkedin.com/in/mubashir-ahmad-hamza-a5961b279/" target='blank'><LuLinkedin size={24} /></Link>
            <Link to="https://github.com/MubashirA4" target='blank'><FiGithub size={24} /></Link>
            <Link to="https://vercel.com/mubashir-ahmad-hamzas-projects" target='blank'><RxVercelLogo size={24} /></Link>
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