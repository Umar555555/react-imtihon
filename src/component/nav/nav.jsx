import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = ({modes, modal, setmodal, modalFunction, modalFunction2}) => {
    const [likee, setlikee] = useState(false)
    const likeefuntion = ()=>{
        setlikee((prevs)=> !prevs)
    }


    const [trued1, settrued1]= useState(false)
    const [trued2, settrued2]= useState(false)
    const [trued3, settrued3]= useState(false)
    const [trued4, settrued4]= useState(false)
    const [trued5, settrued5]= useState(false)
    const likeFunction1 = ()=>{
        settrued1((prev)=> prev = true)
        settrued2((prev)=> prev = false)
        settrued3((prev)=> prev = false)
        settrued4((prev)=> prev = false)
        settrued5((prev)=> prev = false)
    }
    const likeFunction2 = ()=>{
        settrued1((prev)=> prev = true)
        settrued2((prev)=> prev = true)
        settrued3((prev)=> prev = false)
        settrued4((prev)=> prev = false)
        settrued5((prev)=> prev = false)
    }
    const likeFunction3 = ()=>{
        settrued1((prev)=> prev = true)
        settrued2((prev)=> prev = true)
        settrued3((prev)=> prev = true)
        settrued4((prev)=> prev = false)
        settrued5((prev)=> prev = false)
    }
    const likeFunction4 = ()=>{
        settrued1((prev)=> prev = true)
        settrued2((prev)=> prev = true)
        settrued3((prev)=> prev = true)
        settrued4((prev)=> prev = true)
        settrued5((prev)=> prev = false)
    }
    const likeFunction5 = ()=>{
        settrued1((prev)=> prev = true)
        settrued2((prev)=> prev = true)
        settrued3((prev)=> prev = true)
        settrued4((prev)=> prev = true)
        settrued5((prev)=> prev = true)
    }

    const [trueds1, settrueds1]= useState(false)
    const [trueds2, settrueds2]= useState(false)
    const [trueds3, settrueds3]= useState(false)
    const [trueds4, settrueds4]= useState(false)
    const [trueds5, settrueds5]= useState(false)
    const likeFunction6 = ()=>{
        settrueds1((prev)=> prev = true)
        settrueds2((prev)=> prev = false)
        settrueds3((prev)=> prev = false)
        settrueds4((prev)=> prev = false)
        settrueds5((prev)=> prev = false)
    }
    const likeFunction7 = ()=>{
        settrueds1((prev)=> prev = true)
        settrueds2((prev)=> prev = true)
        settrueds3((prev)=> prev = false)
        settrueds4((prev)=> prev = false)
        settrueds5((prev)=> prev = false)
    }
    const likeFunction8 = ()=>{
        settrueds1((prev)=> prev = true)
        settrueds2((prev)=> prev = true)
        settrueds3((prev)=> prev = true)
        settrueds4((prev)=> prev = false)
        settrueds5((prev)=> prev = false)
    }
    const likeFunction9 = ()=>{
        settrueds1((prev)=> prev = true)
        settrueds2((prev)=> prev = true)
        settrueds3((prev)=> prev = true)
        settrueds4((prev)=> prev = true)
        settrueds5((prev)=> prev = false)
    }
    const likeFunction10 = ()=>{
        settrueds1((prev)=> prev = true)
        settrueds2((prev)=> prev = true)
        settrueds3((prev)=> prev = true)
        settrueds4((prev)=> prev = true)
        settrueds5((prev)=> prev = true)
    }

    const [truede1, settruede1]= useState(false)
    const [truede2, settruede2]= useState(false)
    const [truede3, settruede3]= useState(false)
    const [truede4, settruede4]= useState(false)
    const [truede5, settruede5]= useState(false)
    const likeFunction11 = ()=>{
        settruede1((prev)=> prev = true)
        settruede2((prev)=> prev = false)
        settruede3((prev)=> prev = false)
        settruede4((prev)=> prev = false)
        settruede5((prev)=> prev = false)
    }
    const likeFunction12 = ()=>{
        settruede1((prev)=> prev = true)
        settruede2((prev)=> prev = true)
        settruede3((prev)=> prev = false)
        settruede4((prev)=> prev = false)
        settruede5((prev)=> prev = false)
    }
    const likeFunction13 = ()=>{
        settruede1((prev)=> prev = true)
        settruede2((prev)=> prev = true)
        settruede3((prev)=> prev = true)
        settruede4((prev)=> prev = false)
        settruede5((prev)=> prev = false)
    }
    const likeFunction14 = ()=>{
        settruede1((prev)=> prev = true)
        settruede2((prev)=> prev = true)
        settruede3((prev)=> prev = true)
        settruede4((prev)=> prev = true)
        settruede5((prev)=> prev = false)
    }
    const likeFunction15 = ()=>{
        settruede1((prev)=> prev = true)
        settruede2((prev)=> prev = true)
        settruede3((prev)=> prev = true)
        settruede4((prev)=> prev = true)
        settruede5((prev)=> prev = true)
    }

    const [trueda1, settrueda1]= useState(false)
    const [trueda2, settrueda2]= useState(false)
    const [trueda3, settrueda3]= useState(false)
    const [trueda4, settrueda4]= useState(false)
    const [trueda5, settrueda5]= useState(false)
    const likeFunction16 = ()=>{
        settrueda1((prev)=> prev = true)
        settrueda2((prev)=> prev = false)
        settrueda3((prev)=> prev = false)
        settrueda4((prev)=> prev = false)
        settrueda5((prev)=> prev = false)
    }
    const likeFunction17 = ()=>{
        settrueda1((prev)=> prev = true)
        settrueda2((prev)=> prev = true)
        settrueda3((prev)=> prev = false)
        settrueda4((prev)=> prev = false)
        settrueda5((prev)=> prev = false)
    }
    const likeFunction18 = ()=>{
        settrueda1((prev)=> prev = true)
        settrueda2((prev)=> prev = true)
        settrueda3((prev)=> prev = true)
        settrueda4((prev)=> prev = false)
        settrueda5((prev)=> prev = false)
    }
    const likeFunction19 = ()=>{
        settrueda1((prev)=> prev = true)
        settrueda2((prev)=> prev = true)
        settrueda3((prev)=> prev = true)
        settrueda4((prev)=> prev = true)
        settrueda5((prev)=> prev = false)
    }
    const likeFunction20 = ()=>{
        settrueda1((prev)=> prev = true)
        settrueda2((prev)=> prev = true)
        settrueda3((prev)=> prev = true)
        settrueda4((prev)=> prev = true)
        settrueda5((prev)=> prev = true)
    }

    const [truedo1, settruedo1]= useState(false)
    const [truedo2, settruedo2]= useState(false)
    const [truedo3, settruedo3]= useState(false)
    const [truedo4, settruedo4]= useState(false)
    const [truedo5, settruedo5]= useState(false)
    const likeFunction21 = ()=>{
        settruedo1((prev)=> prev = true)
        settruedo2((prev)=> prev = false)
        settruedo3((prev)=> prev = false)
        settruedo4((prev)=> prev = false)
        settruedo5((prev)=> prev = false)
    }
    const likeFunction22 = ()=>{
        settruedo1((prev)=> prev = true)
        settruedo2((prev)=> prev = true)
        settruedo3((prev)=> prev = false)
        settruedo4((prev)=> prev = false)
        settruedo5((prev)=> prev = false)
    }
    const likeFunction23 = ()=>{
        settruedo1((prev)=> prev = true)
        settruedo2((prev)=> prev = true)
        settruedo3((prev)=> prev = true)
        settruedo4((prev)=> prev = false)
        settruedo5((prev)=> prev = false)
    }
    const likeFunction24 = ()=>{
        settruedo1((prev)=> prev = true)
        settruedo2((prev)=> prev = true)
        settruedo3((prev)=> prev = true)
        settruedo4((prev)=> prev = true)
        settruedo5((prev)=> prev = false)
    }
    const likeFunction25 = ()=>{
        settruedo1((prev)=> prev = true)
        settruedo2((prev)=> prev = true)
        settruedo3((prev)=> prev = true)
        settruedo4((prev)=> prev = true)
        settruedo5((prev)=> prev = true)
    }

    const [truedu1, settruedu1]= useState(false)
    const [truedu2, settruedu2]= useState(false)
    const [truedu3, settruedu3]= useState(false)
    const [truedu4, settruedu4]= useState(false)
    const [truedu5, settruedu5]= useState(false)
    const likeFunction26 = ()=>{
        settruedu1((prev)=> prev = true)
    }
    const likeFunction27 = ()=>{
        settruedu1((prev)=> prev = true)
        settruedu2((prev)=> prev = true)
    }
    const likeFunction28 = ()=>{
        settruedu1((prev)=> prev = true)
        settruedu2((prev)=> prev = true)
        settruedu3((prev)=> prev = true)
    }
    const likeFunction29 = ()=>{
        settruedu1((prev)=> prev = true)
        settruedu2((prev)=> prev = true)
        settruedu3((prev)=> prev = true)
        settruedu4((prev)=> prev = true)
    }
    const likeFunction30 = ()=>{
        settruedu1((prev)=> prev = true)
        settruedu2((prev)=> prev = true)
        settruedu3((prev)=> prev = true)
        settruedu4((prev)=> prev = true)
        settruedu5((prev)=> prev = true)
    }
  return (
    <div className='nav'>
        <div className="top-cards">
            <div className="top-left-card">
                <div className="left1"></div>
                <div className="right1">
                    <h1 className="right1-title">INY VINTAGE CHAIR</h1>
                    <button className="button" onClick={modalFunction}>VIEW DETAILS</button>
                </div>
            </div>
            <div className="top-right-card">
                <div className="left2"></div>
                <div className="right2">
                    <h1 className="right2-title">LARGE TERRACOTA <br />VASE</h1>
                    <button className="button" onClick={modalFunction}>VIEW DETAILS</button>
                </div>
            </div>
        </div>
        <div className="main-cards">
            <div className="main-card-left1">
                <div className="main-back">
                    <h1 className="main-left1-title">DECOR</h1>
                    <p className="main-left1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut     laboreet dolore magna aliqua.</p>
                    <button className="button" onClick={modalFunction}>VIEW DETAILS</button>
                </div>
            </div>
            <div className="main-card-left2">
                <div className="main-left2-background"></div>
                <div className="cont">
                    <h1 className={`title ${modes && 'acts'}`}>LINEN BEACH TOWEL</h1>
                        <div className="wrpper"><div onClick={likeFunction1} className={`item ${trued1 && 'active'}`}></div><div onClick={likeFunction2} className={`item ${trued2 && 'active'}`}></div><div onClick={likeFunction3} className={`item ${trued3 && 'active'}`}></div><div onClick={likeFunction4} className={`item ${trued4 && 'active'}`}></div><div onClick={likeFunction5} className={`item ${trued5 && 'active'}`}></div></div>
                    <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="main-card-right1">
                <div className="main-right1-background">
                    <div className="like-detalis">
                        <div className="likes"></div>
                        <div className={`likes2 ${likee && 'acte'}`} onClick={likeefuntion}></div>
                    </div>
                </div>
                <div className="cont">
                    <h1 className={`title ${modes && 'acts'}`}>Square Clear Glass Box</h1>
                    <div className="wrpper"><div onClick={likeFunction6} className={`item ${trueds1 && 'active'}`}></div><div onClick={likeFunction7} className={`item ${trueds2 && 'active'}`}></div><div onClick={likeFunction8} className={`item ${trueds3 && 'active'}`}></div><div onClick={likeFunction9} className={`item ${trueds4 && 'active'}`}></div><div onClick={likeFunction10} className={`item ${trueds5 && 'active'}`}></div></div>
                    <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="main-card-right2">
                <div className="main-right2-background"></div>
                <div className="cont">
                    <h1 className={`title ${modes && 'acts'}`}>4-pack Small Ceramic Plates</h1>
                    <div className="wrpper"><div onClick={likeFunction11} className={`item ${truede1 && 'active'}`}></div><div onClick={likeFunction12} className={`item ${truede2 && 'active'}`}></div><div onClick={likeFunction13} className={`item ${truede3 && 'active'}`}></div><div onClick={likeFunction14} className={`item ${truede4 && 'active'}`}></div><div onClick={likeFunction15} className={`item ${truede5 && 'active'}`}></div></div>
                    <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
        </div>
        <div className="bottom-cards">
            <div className="bottom-card-left1">
                <div className="bottom-left1-background"></div>
                <div className="cont">
                <h1 className={`title ${modes && 'acts'}`}>Large Clear Glass Box</h1>
                <div className="wrpper"><div onClick={likeFunction16} className={`item ${trueda1 && 'active'}`}></div><div onClick={likeFunction17} className={`item ${trueda2 && 'active'}`}></div><div onClick={likeFunction18} className={`item ${trueda3 && 'active'}`}></div><div onClick={likeFunction19} className={`item ${trueda4 && 'active'}`}></div><div onClick={likeFunction20} className={`item ${trueda5 && 'active'}`}></div></div>
                <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="bottom-card-left2">
                <div className="bottom-left2-bacground"></div>
            <div className="cont">
                <h1 className={`title ${modes && 'acts'}`}>Round Jute Placemat</h1>
                <div className="wrpper"><div onClick={likeFunction21} className={`item ${truedo1 && 'active'}`}></div><div onClick={likeFunction22} className={`item ${truedo2 && 'active'}`}></div><div onClick={likeFunction23} className={`item ${truedo3 && 'active'}`}></div><div onClick={likeFunction24} className={`item ${truedo4 && 'active'}`}></div><div onClick={likeFunction25} className={`item ${truedo5 && 'active'}`}></div></div>
                <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="bottom-card-right1">
            <div className="bottom-right1-background"></div>
                <div className="cont">
                <h1 className={`title ${modes && 'acts'}`}>Metal Wire Basket</h1>
                <div className="wrpper"><div onClick={likeFunction26} className={`item ${truedu1 && 'active'}`}></div><div onClick={likeFunction27} className={`item ${truedu2 && 'active'}`}></div><div onClick={likeFunction28} className={`item ${truedu3 && 'active'}`}></div><div onClick={likeFunction29} className={`item ${truedu4 && 'active'}`}></div><div onClick={likeFunction30} className={`item ${truedu5 && 'active'}`}></div></div>
                <p className={`text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="bottom-card-right2">
                <div className="bottom-back">
                <h1 className="main-left1-title">BOHO CHIC</h1>
                <p className="main-left1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn-light" onClick={modalFunction}>VIEW ALL</button>
                </div>
            </div>
        </div>
        <div className="top-left-card2">
                <div className="left1"></div>
                <div className="right1">
                    <h1 className="right1-title">INY VINTAGE CHAIR</h1>
                    <button className="button" style={{backgroundColor: 'transparent', color: 'black', border: '2px solid black'  }} onClick={modalFunction}>VIEW DETAILS</button>
        </div>
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

export default Nav