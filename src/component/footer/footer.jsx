import './footer.css'
import { Component } from 'react'


class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            tokenBot : "7457354769:AAGXld7S67KVepAaS-nm22LKOxyORZVZ62g",
            chatId : '6733043067',
            moded : false
        }
    }
    setmoded = ()=>{
        this.setState(()=>({
            moded : true
        }))
    }

    tokens = (e)=>{
        e.preventDefault()
        fetch(`https://api.telegram.org/bot${this.state.tokenBot}/sendMessage`,{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body  : JSON.stringify({
                chat_id : this.state.chatId,
                text : `${this.state.name}`
            })
            
        })
    }
    onChangeHande = (e)=>{
        this.props.modes
        this.setState({
         [e.target.name] : e.target.value
        })
     }
    render(){
        const {modes} = this.props
        return (
                  <div className='footer'>
              <button className="load-more">LOAD MORE</button>

              <div className="telegram">
                  <div className="telegram-left">
                      <h1 className={`t-title ${modes && 'acts'}`}>SING UP FOR OUR NEWSLETTER</h1>
                      <p className={`t-text ${modes && 'acts'}`}>Subscribe for the latest DEALS and promotions</p>
                  </div>
                  <form onSubmit={this.tokens}>
                      <input value={this.state.name} onChange={this.onChangeHande} name="name" type="email" className='t-input' placeholder='Enter your e-mail address'/>
                      <button className="t-btn" type="submit"></button>
                  </form>
              </div>
              <div className="footer-t">

                  {/* section-1-start */}
                  <div className="section-1">
                      <h1 className="section1-title">BRAND NAME</h1>
                      <p className="section1-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="section1-about">
                      <p className="section1-about1">121 king street, Melbourne 3000</p>
                      <p className="section1-about2">+12 3 0000 0000</p>
                      <p className="section1-about3">contact@brandemail.com</p>
                      </div>
                      <ul className="section2-uls">
                              <li className="section2-ul-li">Your cart</li>
                              <li className="section2-ul-li">Your orders</li>
                              <li className="section2-ul-li">Compared items</li>
                              <li className="section2-ul-li">Wishlist items</li>
                              <li className="section2-ul-li">Shipping detail </li>
                          </ul>
                      <div className="brauzer">
                          <form action="https://facebook.com/">
                              <button className="facebook"></button>
                          </form>
                          <form action="http://twitter.com/">
                              <button className="twitter"></button>
                          </form>
                          <form action="http://instagram.com">
                              <button className="instagram"></button>
                          </form>
                          <form action="http://youtube.com">
                              <button className="youtube"></button>
                          </form>
                      </div>
                  </div>
                  {/* section-1-end */}


                  {/* section-2-start */}
                  <div className="section-2">
                      <div className="section2-container">
                          <h1 className="section-title">SHOPPING</h1>
                          <ul className="section2-ul uls">
                              <li className="section2-ul-li">Your cart</li>
                              <li className="section2-ul-li">Your orders</li>
                              <li className="section2-ul-li">Compared items</li>
                              <li className="section2-ul-li">Wishlist items</li>
                              <li className="section2-ul-li">Shipping detail </li>
                          </ul>
                      </div>
                  </div>
                  {/* section-2-end */}


                  {/* section-3-start */}
                  <div className="section-3">
                      <div className="section3-container">
                      <h1 className="section-title">MORE LINK</h1>
                          <ul className="section3-ul uls">
                              <li className="section3-ul-li">Blog</li>
                              <li className="section3-ul-li">Gift Center</li>
                              <li className="section3-ul-li">Buying Guides</li>
                              <li className="section3-ul-li">New Arrivals</li>
                              <li className="section3-ul-li">Clearance</li>
                          </ul>
                      </div>
                  </div>
                  {/* section-3-end */}


                  {/* section-3-start */}
                  <div className="section-4">
                      <div className="section4-container e">
                          <h1 className="section-title">PROMO UPDATE</h1>
                          <span className="data-wrap"><p className="items-1">14</p><p className="items-2">May</p></span>
                          <p className="section4-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                          <p className="comments">3 comments</p>
                      </div>
                      <div className="section4-container">
                          <span className="data-wrap"><p className="items-1">15</p><p className="items-2">July</p></span>
                          <p className="section4-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                          <p className="comments">3 comments</p>
                      </div>
                  </div>
                  {/* section-4-end */}
              </div>
                  <div className="footer-bottom">Brand Registered Name © – All rights reserved </div>
          </div>
        )
    }
}   

export default Footer