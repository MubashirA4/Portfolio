import React from 'react'
import './css/contact.css'
import { Link } from 'react-router-dom'
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import Mubashir from "../home/assets/Mubashir.jpeg"


const Contact = () => {
  return (
    <div className="container">
      <div className='contact'>
        <section>
          <h4>Get In Touch<b>.</b></h4>
          <p>Looking to partner or work together? Reach out through the form and I'll get back to you in the next 24 hours.</p>
          <Link to="mailto:hamza.cse123@gmail.com">
          <div className="email">
          <BsEnvelope size={20}/>
          </div>
           hamza.cse123@gmail.com</Link><br />
          <Link to="tel:+923334475755">
          <div className="email">
          <BsTelephone size={20}/>
          </div>
            +92-333-4475-755</Link>
        </section>
        <aside>
          <div className="image">
            <img src={Mubashir} alt="" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact