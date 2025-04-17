import React from 'react'
import './main.css'
import { useState } from 'react'


const Main = ({modal, setmodal, modalFunction, modalFunction2}) => {
  return (
    <div className="conts">
    <div className='main'>
        <div className="main-left"></div>
        <div className="main-right">
            <p className="main-text">HOT DEALS THIS WEEK</p>
            <h1 className="main-title">SALE 50% OFF <br /> MODERN FURNITURE</h1>
            <button className='main-btn' onClick={modalFunction}>VIEW NOW</button>
        </div>
    </div>
    <div className="sliders">
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
        <div className="slider"></div>
    </div>
    <div className={`main-modal ${modal && 'main-active'}`} onClick={modalFunction2}>
      <div className="modal-container" onClick={modalFunction2}>
        <h1 className="main-modal-title">Brand</h1>
        <p className="main-modal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa rem cumque sequi minus quis commodi reprehenderit magni facere animi! Itaque praesentium illum aliquam deleniti esse omnis perferendis, dignissimos exercitationem!
        Nemo laudantium totam pariatur atque libero numquam eaque facilis minus? Architecto, odio accusamus quo nobis eaque dolorum? Cumque sunt, quis ab omnis fuga reiciendis, dolore sequi necessitatibus labore, eligendi deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id at consectetur voluptatum accusamus aut libero. Ab, quod aliquam? Quos vero repudiandae nisi illum! Corporis non commodi pariatur maiores nostrum.
        Dolor odit, et ratione magnam nobis rerum vitae neque itaque, ut dignissimos deleniti beatae necessitatibus possimus repudiandae asperiores consequuntur ipsa distinctio officiis ab exercitationem eligendi laborum reiciendis aliquam debitis! Amet! Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
    </div>
  )
}

export default Main