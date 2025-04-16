import React from 'react'
import './main.css'



const Main = () => {
  return (
    <div className="cont">
    <div className='main'>
        <div className="main-left"></div>
        <div className="main-right">
            <p className="main-text">HOT DEALS THIS WEEK</p>
            <h1 className="main-title">SALE 50% OFF <br /> MODERN FURNITURE</h1>
            <button className='main-btn'>VIEW NOW</button>
        </div>
    </div>
    <div className="sliders">
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
    </div>
    </div>
  )
}

export default Main