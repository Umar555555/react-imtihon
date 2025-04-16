import './header.css'
import { useState } from 'react'

const Header = ({modes, modesFunction}) => {
    const [burgers, setburgers] = useState(false)
    const closes = ()=>{
        setburgers((prev) => !prev)
    }
    const show = ()=>{
        setburgers((prev) => !prev)
    }
  return (
    <div className="container">
        <div className='header-1'>
            <div className="brand-container">
            <div className={`brand-logo ${modes && 'acts'}`}></div>
            <h1 className={`brand-name ${modes && 'acts'}`}>MODY STORE</h1>
            </div>
            <div className="header-right">
                <div className={`header-img1 ${modes && 'acts'}`}></div>
                <div className={`header-img2 ${modes && 'acts'}`} onClick={modesFunction}></div>
                <div className={`header-img3 ${modes && 'acts'}`} onClick={show}></div>
            </div>
        </div>
        <div className="header-3">
            <form className='form'>
                <div className="input-wrap">
                    <div className="lupa"></div>
                    <input type="text" className='input' />
                </div>
                <button className="header-btn">Search</button>
            </form>
        </div>
        <div className="header-4">
            <ul className={`header-ul-2 ${modes && 'acts'}`}>
                <li className="header-ul-li-2"><div className={`header-img4 ${modes && 'acts'}`}></div><p className={`header-text ${modes && 'acts'}`}>FREE SHIPPING</p></li>
                <li className="header-ul-li-2"><div className={`header-img ${modes && 'acts'}`}></div><p className={`header-text ${modes && 'acts'}`}>100% REFUND</p></li>
                <li className="header-ul-li-2"><div className={`header-imgs ${modes && 'acts'}`}></div><p className={`header-text ${modes && 'acts'}`}>SUPPORT 24/7</p></li>
            </ul>
        </div>
        <div className={`burger ${burgers ? 'burger-show' : 'burger-active'}`}>
            <ul className={`burger-ul ${modes && 'acts'}`}>
                <div className="wraps">
                <h1 className="burger-title">Menu</h1>
                <div className="close" onClick={closes}></div>
                </div>
                <li className={`burger-ul-li ${modes && 'acts'}`}>HOME</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>STORE</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>ACCESSORIES</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>BRAND</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>PAGES</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>ABOUT US</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>NEWS</li>
                <li className={`burger-ul-li ${modes && 'acts'}`}>CONTACT US</li>
            </ul>
        </div>
    </div>
  )
}

export default Header