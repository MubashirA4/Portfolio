import React from 'react'
import Elearning from '../assets/E-learning.png'

export const Projects = () => {
  return (
    <div>
      <div className="h-project">
        <h2>Projects<b>.</b></h2>
        <div className="cards">
          <div className="card1">
            <img src={Elearning} alt="" />
            <h3>E-learning</h3>
            <p>E-learning website for the purpose of Education.</p>
          </div>
          <div className="card1">
            <img src={Elearning} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
