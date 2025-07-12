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
                    src="images/test.png"
                    text="Pillar"
                    label='Pillar'
                    path='/about_me'/>
                    <CardItem 
                    src="images/test.png"
                    text="House"
                    label='Road'
                    path='/about_me'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/test.png"
                    text="house"
                    label='Bridge'
                    path='/about_me'/>
                    <CardItem 
                    src="images/test.JPG"
                    text="house"
                    label='Banana'
                    path='/about_me'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/test.jpeg"
                    text="house"
                    label='Adventure'
                    path='/about_me'/>
                    <CardItem 
                    src="images/test.jpeg"
                    text="house"
                    label='Adventure'
                    path='/about_me'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/test.jpeg"
                    text="house"
                    label='Adventure'
                    path='/about_me'/>
                    <CardItem 
                    src="images/test.jpeg"
                    text="house"
                    label='Adventure'
                    path='/about_me'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/test.jpeg"
                    text="house"
                    label='Adventure'
                    path='/about_me'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards