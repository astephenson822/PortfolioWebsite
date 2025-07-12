import React from 'react'
import '../../App.css'
import HeroSection from '../Hero_Section';
import Cards from '../Home_Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;