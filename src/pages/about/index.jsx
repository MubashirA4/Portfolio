import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './css/index.css'
const About = () => {
  return (
    <Container>
      <div className="about">
          <section className='header'>
            <h4>About me<b>.</b></h4>
            <div className="t-border">
              <p>
                Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
              </p>
            </div>
          </section>
          <section class="story">
            <h4>My Story<b>.</b></h4>
            <p>
              I'm a dedicated web developer with a passion for crafting innovative digital experiences. <br /><br />
              My journey began in 2020 when I started exploring HTML and CSS, where I honed my skills in creating visually appealing designs.
              As my interest grew, I pursued a Bachelor of Science in Computer Science, deepening my understanding of web development principles and technologies.
              <br /><br />
              Recently, I completed a MERN stack course, expanding my expertise to include React and MongoDB.
              I've successfully implemented these technologies in various projects, demonstrating my ability to build dynamic and interactive web applications.
            </p>
          </section>
      </div>
    </Container>
  )
}

export default About