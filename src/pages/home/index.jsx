import React from 'react'
import { Link } from 'react-router-dom';
import { PiHandWavingThin } from "react-icons/pi";
import Mubashir from "./assets/Mubashir.jpeg"
import Elearning from "./assets/E-learning.png"
const HomePage = () => {
  return (
    <div className='container'>
      <main>
        <section>
          <h4>Hey, I'm Mubashir <PiHandWavingThin /></h4>
          <h2><span>Front</span>end Developer</h2>
          <p>I'm a frontend developer based in Pakistan, I'll help you build beautiful websites your users will love.</p>
          <div className="links">
          <Link to="/contact" className='git'>Get In Touch</Link>
          <Link to="projects" className='bp'>Browse Projects</Link>
          </div>
        </section>
        <aside>
          <div className="image">
            <img src={Mubashir} alt="" />
          </div>
        </aside>
      </main>
      <div className="h-project">
        <h2>Projects<b>.</b></h2>
        <div className="cards">
          <div className="card1">
            <img src={Elearning} alt="" />
          </div>
          <div className="card1">
            <img src={Elearning} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage