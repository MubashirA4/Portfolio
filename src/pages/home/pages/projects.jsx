import React from 'react'
import Elearning from '../assets/E-learning.png'
import ProjectCard from '../../Projects/projects/ProjectCard'
import BlogImage from '../../Projects/assets/Screenshot 2024-07-16 231809.jpg'

export const Projects = () => {
  return (
    <div>
      <div className="h-project">
        <h2>Projects<b>.</b></h2>
        <div className="cards">
        <ProjectCard
            imgSrc={Elearning}
            title="e-Learning"
            description= "Passionately developing innovative e-learning solutions that bridge the gap between technology and education."
            link={"https://e-learning-alpha-pearl.vercel.app/"}
          />
          <ProjectCard
            imgSrc={BlogImage}
            title="Blog Website"
            description= "A resource for tech enthusiasts and professionals looking to stay up-to-date on the latest developments."
            link={"https://blog-eight-henna-12.vercel.app/"}
          />
        </div>
      </div>
    </div>
  )
}
