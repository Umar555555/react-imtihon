import React from 'react'
import Header from './component/header/header'
import './App.css'
import Main from './component/main/main'
import Nav from './component/nav/nav'
import Hero from './component/hero/hero'
import Footer from './component/footer/footer'
import ExtraNav from './component/extra-nav/extra-nav'
import { useState } from 'react'

const App = () => {
    const [modal, setmodal] = useState(false)
    const modalFunction = ()=>{
      setmodal((prec)=> !prec)
    }
    const modalFunction2 = ()=>{
      setmodal((precs)=> precs = false)
    }

    const [modes, setmodes] = useState(false)
    const modesFunction = ()=>{
        setmodes((prev)=> !prev)
    }
  return (
    <div className={`container ${modes && 'acts'}`} style={{boxSizing: 'border-box',width: '100%',padding: '0',maxWidth: '1440px',border: '0px solid white',backgroundColor: 'light', display: 'flex', flexDirection : 'column' , alignItems : 'center', margin : '0px auto'}}>
      <Header modes={modes} setmodes={setmodes} modesFunction={modesFunction} />
      <Main  modal={modal} setmodal={setmodal} modalFunction={modalFunction} modalFunction2={modalFunction2} />
      <Nav modes={modes} modal={modal} setmodal={setmodal} modalFunction={modalFunction} modalFunction2={modalFunction2} />
      <Hero  modal={modal} setmodal={setmodal} modalFunction={modalFunction} modalFunction2={modalFunction2}/>
      <ExtraNav modes={modes} />
      <Footer modes={modes}/>
    </div>
  )
}

export default App