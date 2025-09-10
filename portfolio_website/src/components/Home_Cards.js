import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>A little bit about me</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/COLSA.png`}
                    text="My Work at COLSA Corporation"
                    label='Work Experience'
                    path='/my_work'
                    customClass="zoomed-out"/>
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/projects.png`}
                    text="Class Work, Unity Development, and EcoCAR"
                    label='Projects'
                    path='/my_work'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/bama.png`}
                    text="The University of Alabama Tuscaloosa"
                    label='Education'
                    path='/education'/>
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/courses.png`}
                    text="Relevant Coursework"
                    label='Courses'
                    path='/education'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/skills.png`}
                    text="Coding, Computer, and soft"
                    label='Skills'
                    path='/about_me'/>
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/clubs.png`}
                    text="Clubs and Awards"
                    label='Involvement'
                    path='/about_me'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards