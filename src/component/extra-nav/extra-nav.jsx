import React from 'react'
import './extra-nav.css'
import { useState } from 'react'

const ExtraNav = ({modes}) => {
        const [trud1, settrud1]= useState(false)
        const [trud2, settrud2]= useState(false)
        const [trud3, settrud3]= useState(false)
        const [trud4, settrud4]= useState(false)
        const [trud5, settrud5]= useState(false)
        const likFunction1 = ()=>{
            settrud1((prev)=> prev = true)
            settrud2((prev)=> prev = false)
            settrud3((prev)=> prev = false)
            settrud4((prev)=> prev = false)
            settrud5((prev)=> prev = false)
        }
        const likFunction2 = ()=>{
            settrud1((prev)=> prev = true)
            settrud2((prev)=> prev = true)
            settrud3((prev)=> prev = false)
            settrud4((prev)=> prev = false)
            settrud5((prev)=> prev = false)
        }
        const likFunction3 = ()=>{
            settrud1((prev)=> prev = true)
            settrud2((prev)=> prev = true)
            settrud3((prev)=> prev = true)
            settrud4((prev)=> prev = false)
            settrud5((prev)=> prev = false)
        }
        const likFunction4 = ()=>{
            settrud1((prev)=> prev = true)
            settrud2((prev)=> prev = true)
            settrud3((prev)=> prev = true)
            settrud4((prev)=> prev = true)
            settrud5((prev)=> prev = false)
        }
        const likFunction5 = ()=>{
            settrud1((prev)=> prev = true)
            settrud2((prev)=> prev = true)
            settrud3((prev)=> prev = true)
            settrud4((prev)=> prev = true)
            settrud5((prev)=> prev = true)
        }
    
        const [truds1, settruds1]= useState(false)
        const [truds2, settruds2]= useState(false)
        const [truds3, settruds3]= useState(false)
        const [truds4, settruds4]= useState(false)
        const [truds5, settruds5]= useState(false)
        const likFunction6 = ()=>{
            settruds1((prev)=> prev = true)
            settruds2((prev)=> prev = false)
            settruds3((prev)=> prev = false)
            settruds4((prev)=> prev = false)
            settruds5((prev)=> prev = false)
        }
        const likFunction7 = ()=>{
            settruds1((prev)=> prev = true)
            settruds2((prev)=> prev = true)
            settruds3((prev)=> prev = false)
            settruds4((prev)=> prev = false)
            settruds5((prev)=> prev = false)
        }
        const likFunction8 = ()=>{
            settruds1((prev)=> prev = true)
            settruds2((prev)=> prev = true)
            settruds3((prev)=> prev = true)
            settruds4((prev)=> prev = false)
            settruds5((prev)=> prev = false)
        }
        const likFunction9 = ()=>{
            settruds1((prev)=> prev = true)
            settruds2((prev)=> prev = true)
            settruds3((prev)=> prev = true)
            settruds4((prev)=> prev = true)
            settruds5((prev)=> prev = false)
        }
        const likFunction10 = ()=>{
            settruds1((prev)=> prev = true)
            settruds2((prev)=> prev = true)
            settruds3((prev)=> prev = true)
            settruds4((prev)=> prev = true)
            settruds5((prev)=> prev = true)
        }
    
        const [trude1, settrude1]= useState(false)
        const [trude2, settrude2]= useState(false)
        const [trude3, settrude3]= useState(false)
        const [trude4, settrude4]= useState(false)
        const [trude5, settrude5]= useState(false)
        const likFunction11 = ()=>{
            settrude1((prev)=> prev = true)
            settrude2((prev)=> prev = false)
            settrude3((prev)=> prev = false)
            settrude4((prev)=> prev = false)
            settrude5((prev)=> prev = false)
        }
        const likFunction12 = ()=>{
            settrude1((prev)=> prev = true)
            settrude2((prev)=> prev = true)
            settrude3((prev)=> prev = false)
            settrude4((prev)=> prev = false)
            settrude5((prev)=> prev = false)
        }
        const likFunction13 = ()=>{
            settrude1((prev)=> prev = true)
            settrude2((prev)=> prev = true)
            settrude3((prev)=> prev = true)
            settrude4((prev)=> prev = false)
            settrude5((prev)=> prev = false)
        }
        const likFunction14 = ()=>{
            settrude1((prev)=> prev = true)
            settrude2((prev)=> prev = true)
            settrude3((prev)=> prev = true)
            settrude4((prev)=> prev = true)
            settrude5((prev)=> prev = false)
        }
        const likFunction15 = ()=>{
            settrude1((prev)=> prev = true)
            settrude2((prev)=> prev = true)
            settrude3((prev)=> prev = true)
            settrude4((prev)=> prev = true)
            settrude5((prev)=> prev = true)
        }
    
        const [truda1, settruda1]= useState(false)
        const [truda2, settruda2]= useState(false)
        const [truda3, settruda3]= useState(false)
        const [truda4, settruda4]= useState(false)
        const [truda5, settruda5]= useState(false)
        const likFunction16 = ()=>{
            settruda1((prev)=> prev = true)
            settruda2((prev)=> prev = false)
            settruda3((prev)=> prev = false)
            settruda4((prev)=> prev = false)
            settruda5((prev)=> prev = false)
        }
        const likFunction17 = ()=>{
            settruda1((prev)=> prev = true)
            settruda2((prev)=> prev = true)
            settruda3((prev)=> prev = false)
            settruda4((prev)=> prev = false)
            settruda5((prev)=> prev = false)
        }
        const likFunction18 = ()=>{
            settruda1((prev)=> prev = true)
            settruda2((prev)=> prev = true)
            settruda3((prev)=> prev = true)
            settruda4((prev)=> prev = false)
            settruda5((prev)=> prev = false)
        }
        const likFunction19 = ()=>{
            settruda1((prev)=> prev = true)
            settruda2((prev)=> prev = true)
            settruda3((prev)=> prev = true)
            settruda4((prev)=> prev = true)
            settruda5((prev)=> prev = false)
        }
        const likFunction20 = ()=>{
            settruda1((prev)=> prev = true)
            settruda2((prev)=> prev = true)
            settruda3((prev)=> prev = true)
            settruda4((prev)=> prev = true)
            settruda5((prev)=> prev = true)
        }
    
        const [trudo1, settrudo1]= useState(false)
        const [trudo2, settrudo2]= useState(false)
        const [trudo3, settrudo3]= useState(false)
        const [trudo4, settrudo4]= useState(false)
        const [trudo5, settrudo5]= useState(false)
        const likFunction21 = ()=>{
            settrudo1((prev)=> prev = true)
            settrudo2((prev)=> prev = false)
            settrudo3((prev)=> prev = false)
            settrudo4((prev)=> prev = false)
            settrudo5((prev)=> prev = false)
        }
        const likFunction22 = ()=>{
            settrudo1((prev)=> prev = true)
            settrudo2((prev)=> prev = true)
            settrudo3((prev)=> prev = false)
            settrudo4((prev)=> prev = false)
            settrudo5((prev)=> prev = false)
        }
        const likFunction23 = ()=>{
            settrudo1((prev)=> prev = true)
            settrudo2((prev)=> prev = true)
            settrudo3((prev)=> prev = true)
            settrudo4((prev)=> prev = false)
            settrudo5((prev)=> prev = false)
        }
        const likFunction24 = ()=>{
            settrudo1((prev)=> prev = true)
            settrudo2((prev)=> prev = true)
            settrudo3((prev)=> prev = true)
            settrudo4((prev)=> prev = true)
            settrudo5((prev)=> prev = false)
        }
        const likFunction25 = ()=>{
            settrudo1((prev)=> prev = true)
            settrudo2((prev)=> prev = true)
            settrudo3((prev)=> prev = true)
            settrudo4((prev)=> prev = true)
            settrudo5((prev)=> prev = true)
        }
    
        const [trudu1, settrudu1]= useState(false)
        const [trudu2, settrudu2]= useState(false)
        const [trudu3, settrudu3]= useState(false)
        const [trudu4, settrudu4]= useState(false)
        const [trudu5, settrudu5]= useState(false)
        const likFunction26 = ()=>{
            settrudu1((prev)=> prev = true)
            settrudu2((prev)=> prev = false)
            settrudu3((prev)=> prev = false)
            settrudu4((prev)=> prev = false)
            settrudu5((prev)=> prev = false)
        }
        const likFunction27 = ()=>{
            settrudu1((prev)=> prev = true)
            settrudu2((prev)=> prev = true)
            settrudu3((prev)=> prev = false)
            settrudu4((prev)=> prev = false)
            settrudu5((prev)=> prev = false)
        }
        const likFunction28 = ()=>{
            settrudu1((prev)=> prev = true)
            settrudu2((prev)=> prev = true)
            settrudu3((prev)=> prev = true)
            settrudu4((prev)=> prev = false)
            settrudu5((prev)=> prev = false)
        }
        const likFunction29 = ()=>{
            settrudu1((prev)=> prev = true)
            settrudu2((prev)=> prev = true)
            settrudu3((prev)=> prev = true)
            settrudu4((prev)=> prev = true)
            settrudu5((prev)=> prev = false)
}
        const likFunction30 = ()=>{
            settrudu1((prev)=> prev = true)
            settrudu2((prev)=> prev = true)
            settrudu3((prev)=> prev = true)
            settrudu4((prev)=> prev = true)
            settrudu5((prev)=> prev = true)
        }
        const [trudi1, settrudi1]= useState(false)
        const [trudi2, settrudi2]= useState(false)
        const [trudi3, settrudi3]= useState(false)
        const [trudi4, settrudi4]= useState(false)
        const [trudi5, settrudi5]= useState(false)
        const likFunction31 = ()=>{
            settrudi1((prev)=> prev = true)
            settrudi2((prev)=> prev = false)
            settrudi3((prev)=> prev = false)
            settrudi4((prev)=> prev = false)
            settrudi5((prev)=> prev = false)
        }
        const likFunction32 = ()=>{
            settrudi1((prev)=> prev = true)
            settrudi2((prev)=> prev = true)
            settrudi3((prev)=> prev = false)
            settrudi4((prev)=> prev = false)
            settrudi5((prev)=> prev = false)
        }
        const likFunction33 = ()=>{
            settrudi1((prev)=> prev = true)
            settrudi2((prev)=> prev = true)
            settrudi3((prev)=> prev = true)
            settrudi4((prev)=> prev = false)
            settrudi5((prev)=> prev = false)
        }
        const likFunction34 = ()=>{
            settrudi1((prev)=> prev = true)
            settrudi2((prev)=> prev = true)
            settrudi3((prev)=> prev = true)
            settrudi4((prev)=> prev = true)
            settrudi5((prev)=> prev = false)
}
        const likFunction35 = ()=>{
            settrudi1((prev)=> prev = true)
            settrudi2((prev)=> prev = true)
            settrudi3((prev)=> prev = true)
            settrudi4((prev)=> prev = true)
            settrudi5((prev)=> prev = true)
        }
        const [trudus1, settrudus1]= useState(false)
        const [trudus2, settrudus2]= useState(false)
        const [trudus3, settrudus3]= useState(false)
        const [trudus4, settrudus4]= useState(false)
        const [trudus5, settrudus5]= useState(false)
        const likFunction36 = ()=>{
            settrudus1((prev)=> prev = true)
            settrudus2((prev)=> prev = false)
            settrudus3((prev)=> prev = false)
            settrudus4((prev)=> prev = false)
            settrudus5((prev)=> prev = false)
        }
        const likFunction37 = ()=>{
            settrudus1((prev)=> prev = true)
            settrudus2((prev)=> prev = true)
            settrudus3((prev)=> prev = false)
            settrudus4((prev)=> prev = false)
            settrudus5((prev)=> prev = false)
        }
        const likFunction38 = ()=>{
            settrudus1((prev)=> prev = true)
            settrudus2((prev)=> prev = true)
            settrudus3((prev)=> prev = true)
            settrudus4((prev)=> prev = false)
            settrudus5((prev)=> prev = false)
        }
        const likFunction39 = ()=>{
            settrudus1((prev)=> prev = true)
            settrudus2((prev)=> prev = true)
            settrudus3((prev)=> prev = true)
            settrudus4((prev)=> prev = true)
            settrudus5((prev)=> prev = false)
        }
        const likFunction40 = ()=>{
            settrudus1((prev)=> prev = true)
            settrudus2((prev)=> prev = true)
            settrudus3((prev)=> prev = true)
            settrudus4((prev)=> prev = true)
            settrudus5((prev)=> prev = true)
        }
        const [trudue1, settrudue1]= useState(false)
        const [trudue2, settrudue2]= useState(false)
        const [trudue3, settrudue3]= useState(false)
        const [trudue4, settrudue4]= useState(false)
        const [trudue5, settrudue5]= useState(false)
        const likFunction41 = ()=>{
            settrudue1((prev)=> prev = true)
            settrudue2((prev)=> prev = false)
            settrudue3((prev)=> prev = false)
            settrudue4((prev)=> prev = false)
            settrudue5((prev)=> prev = false)
        }
        const likFunction42 = ()=>{
            settrudue1((prev)=> prev = true)
            settrudue2((prev)=> prev = true)
            settrudue3((prev)=> prev = false)
            settrudue4((prev)=> prev = false)
            settrudue5((prev)=> prev = false)
        }
        const likFunction43 = ()=>{
            settrudue1((prev)=> prev = true)
            settrudue2((prev)=> prev = true)
            settrudue3((prev)=> prev = true)
            settrudue4((prev)=> prev = false)
            settrudue5((prev)=> prev = false)
        }
        const likFunction44 = ()=>{
            settrudue1((prev)=> prev = true)
            settrudue2((prev)=> prev = true)
            settrudue3((prev)=> prev = true)
            settrudue4((prev)=> prev = true)
            settrudue5((prev)=> prev = false)
        }
        const likFunction45 = ()=>{
            settrudue1((prev)=> prev = true)
            settrudue2((prev)=> prev = true)
            settrudue3((prev)=> prev = true)
            settrudue4((prev)=> prev = true)
            settrudue5((prev)=> prev = true)
        }

  return (
    <div className="extra">
        <h1 className='extra-title'>TOP RATING</h1>
        <div className="ex-cards">
            <div className="card">
                <div className="back1"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Tray<br />  with Foot</h1>
                    <div className="wrppers"><div onClick={likFunction1} className={`item ${trud1 && 'active'}`}></div><div onClick={likFunction2} className={`item ${trud2 && 'active'}`}></div><div onClick={likFunction3} className={`item ${trud3 && 'active'}`}></div><div onClick={likFunction4} className={`item ${trud4 && 'active'}`}></div><div onClick={likFunction5} className={`item ${trud5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back2"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Twill <br />Seat Cushion</h1>
                    <div className="wrpper"><div onClick={likFunction6} className={`item ${truds1 && 'active'}`}></div><div onClick={likFunction7} className={`item ${truds2 && 'active'}`}></div><div onClick={likFunction8} className={`item ${truds3 && 'active'}`}></div><div onClick={likFunction9} className={`item ${truds4 && 'active'}`}></div><div onClick={likFunction10} className={`item ${truds5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back3"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Fluted Beverage <br />Glass</h1>
                    <div className="wrpper"><div onClick={likFunction11} className={`item ${trude1 && 'active'}`}></div><div onClick={likFunction12} className={`item ${trude2 && 'active'}`}></div><div onClick={likFunction13} className={`item ${trude3 && 'active'}`}></div><div onClick={likFunction14} className={`item ${trude4 && 'active'}`}></div><div onClick={likFunction15} className={`item ${trude5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back4"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Ceramic <br />Egg Cup</h1>
                    <div className="wrpper"><div onClick={likFunction16} className={`item ${truda1 && 'active'}`}></div><div onClick={likFunction17} className={`item ${truda2 && 'active'}`}></div><div onClick={likFunction18} className={`item ${truda3 && 'active'}`}></div><div onClick={likFunction19} className={`item ${truda4 && 'active'}`}></div><div onClick={likFunction20} className={`item ${truda5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="card">
                <div className="back5"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Small <br />Bamboo Box</h1>
                    <div className="wrppers"><div onClick={likFunction21} className={`item ${trudo1 && 'active'}`}></div><div onClick={likFunction22} className={`item ${trudo2 && 'active'}`}></div><div onClick={likFunction23} className={`item ${trudo3 && 'active'}`}></div><div onClick={likFunction24} className={`item ${trudo4 && 'active'}`}></div><div onClick={likFunction25} className={`item ${trudo5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back6"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Metal Cutlery <br />Basket</h1>
                    <div className="wrpper"><div onClick={likFunction26} className={`item ${trudu1 && 'active'}`}></div><div onClick={likFunction27} className={`item ${trudu2 && 'active'}`}></div><div onClick={likFunction28} className={`item ${trudu3 && 'active'}`}></div><div onClick={likFunction29} className={`item ${trudu4 && 'active'}`}></div><div onClick={likFunction30} className={`item ${trudu5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back7"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>4-pack Ceramic <br />Cups</h1>
                    <div className="wrpper"><div onClick={likFunction31} className={`item ${trudi1 && 'active'}`}></div><div onClick={likFunction32} className={`item ${trudi2 && 'active'}`}></div><div onClick={likFunction33} className={`item ${trudi3 && 'active'}`}></div><div onClick={likFunction34} className={`item ${trudi4 && 'active'}`}></div><div onClick={likFunction35} className={`item ${trudi5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="cardas das">
                <div className="back8"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>2-pack Linen <br />Napkins</h1>
                    <div className="wrpper"><div onClick={likFunction36} className={`item ${trudus1 && 'active'}`}></div><div onClick={likFunction37} className={`item ${trudus2 && 'active'}`}></div><div onClick={likFunction38} className={`item ${trudus3 && 'active'}`}></div><div onClick={likFunction39} className={`item ${trudus4 && 'active'}`}></div><div onClick={likFunction40} className={`item ${trudus5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            <div className="card">
                <div className="back9"></div>
                <div className="conta">
                    <h1 className={`card-title ${modes && 'acts'}`}>Glazed Stoneware <br />Plate</h1>
                    <div className="wrppers"><div onClick={likFunction41} className={`item ${trudue1 && 'active'}`}></div><div onClick={likFunction42} className={`item ${trudue2 && 'active'}`}></div><div onClick={likFunction43} className={`item ${trudue3 && 'active'}`}></div><div onClick={likFunction44} className={`item ${trudue4 && 'active'}`}></div><div onClick={likFunction45} className={`item ${trudue5 && 'active'}`}></div></div>
                    <p className={`card-text ${modes && 'acts'}`}>30$</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ExtraNav