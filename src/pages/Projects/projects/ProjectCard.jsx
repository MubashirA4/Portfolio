import React from 'react'
import '../css/ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({ imgSrc, link, title, description }) => {
    return (
        <div className="card1">
            <Link to={link} target='_blank'>
                <img src={imgSrc} alt={title} />
            </Link>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard