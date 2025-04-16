import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container-hero">
            <h1 className="hero-title">BEDSHEET SETS</h1>
            <span className='hero-summa'><p className="hero-summa-1">$50.00</p><p className="hero-summa-2">$220.00</p></span>
            <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className="btn">VIEW DETAILS</button>
        </div>
    </div>
  )
}

export default Hero