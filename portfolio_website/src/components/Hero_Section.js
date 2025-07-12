import React from 'react'
import {Button} from './Button'
import './Hero_Section.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}
        <h1>Welcome to my Portfolio!</h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/resume'>My Resume</Button>
        </div>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/my_work'>My work/personal projects
            </Button>
        </div>
    </div>
  )
}

export default HeroSection