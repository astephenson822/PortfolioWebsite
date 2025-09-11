import React from 'react'
import {Button} from './Button'
import './Hero_Section.css'
import Chatbot from './Chatbot';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted playsInline>
          <source src={`${process.env.PUBLIC_URL}/videos/background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Welcome to my Portfolio!</h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/resume'>My Resume</Button>
        </div>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/my_work'>My work/personal projects
            </Button>
        </div>
        <Chatbot />
    </div>
  )
}

export default HeroSection