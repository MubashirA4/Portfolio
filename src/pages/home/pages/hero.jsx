import React from 'react'
import { PiHandWavingThin } from "react-icons/pi";
import Mubashir from '../assets/Mubashir.jpeg'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div>
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
        </div>
    )
}
