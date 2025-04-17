import React from 'react'
import './hero.css'

const Hero = ({modal, setmodal, modalFunction, modalFunction2}) => {
  return (
    <div className='hero'>
        <div className="container-hero">
            <h1 className="hero-title">BEDSHEET SETS</h1>
            <span className='hero-summa'><p className="hero-summa-1">$50.00</p><p className="hero-summa-2">$220.00</p></span>
            <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className="btn" onClick={modalFunction}>VIEW DETAILS</button>
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

export default Hero