import React from 'react'
import { Container } from 'react-bootstrap';
import { Hero } from './pages/hero';
import { Projects } from './pages/projects';
import { Skills } from './pages/skills';
import { Education } from './pages/education';
import './css/index.css'

const HomePage = () => {
  return (
    <Container>
      <div className='home'>
        <Hero/>
        <Skills/>
        <Education/>
        <Projects/>
      </div>
    </Container>

  )
}

export default HomePage