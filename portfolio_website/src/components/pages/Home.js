import React from 'react'
import '../../App.css'
import HeroSection from '../Hero_Section';
import Cards from '../Home_Cards';
import Footer from '../Footer';
import Chatbot from '../Chatbot';

function Home () {
    return (
        <>
            <HeroSection />
            <Chatbot />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;