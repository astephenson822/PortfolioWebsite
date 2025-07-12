import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Here is my life!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/Pillar.png"
                    text="This is a test to see if this model works"
                    label='Pillar'
                    path='/models'/>
                    <CardItem 
                    src="images/Road.png"
                    text="House"
                    label='Road'
                    path='/Road'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/InsideBridge.png"
                    text="house"
                    label='Bridge'
                    path='/models'/>
                    <CardItem 
                    src="images/Nana.JPG"
                    text="house"
                    label='Banana'
                    path='/models'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-5.jpeg"
                    text="house"
                    label='Adventure'
                    path='/models'/>
                    <CardItem 
                    src="images/img-6.jpeg"
                    text="house"
                    label='Adventure'
                    path='/models'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-7.jpeg"
                    text="house"
                    label='Adventure'
                    path='/models'/>
                    <CardItem 
                    src="images/img-8.jpeg"
                    text="house"
                    label='Adventure'
                    path='/models'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpeg"
                    text="house"
                    label='Adventure'
                    path='/models'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards