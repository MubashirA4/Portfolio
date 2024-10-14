import React from 'react'
import './css/project.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ProjectCard from './projects/ProjectCard'
import Elearning from './assets/E-learning.png'
import BlogImage from './assets/Screenshot 2024-07-16 231809.jpg' 

const Projects = () => {
  return (
    <Container>
        <section className='creation'>
          <h4>My <span>Best</span> Creations</h4>
          <p>Explore a decade of my work, showcasing robust and stylish web <br /> applications designed to meet diverse needs.</p>
        </section>
        <div className="cards">
          <ProjectCard
            imgSrc={Elearning}
            title="eLearning Innovations"
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
    </Container>
  )
} 

export default Projects