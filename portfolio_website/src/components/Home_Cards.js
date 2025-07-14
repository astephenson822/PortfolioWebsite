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
                    text="COLSA Corporation Data Science Intern"
                    label='Work Experience'
                    path='/my_work'
                    customClass="zoomed-out"/>
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/projects.png`}
                    text="Unity, Reinforcement Learning, etc"
                    label='Projects'
                    path='/my_work'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/bama.png`}
                    text="The University of Alabama"
                    label='Education'
                    path='/education'/>
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/courses.png`}
                    text="Class Names and Content Covered"
                    label='Courses'
                    path='/education'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={`${process.env.PUBLIC_URL}/images/skills.png`}
                    text="Technical, hard, and soft"
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