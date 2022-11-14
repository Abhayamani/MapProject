import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex' >
            <div className='text' >
              <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Do You Have Questions ?</h1>
              <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>We'll help you to navigate and play with our maps.</p>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <button className='btn5' style={{height: '6vh'}}>Contact Us Today</button>
          
            </div>
          </div>

        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              
              <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Do You Need Help With Anything?</h2>
              <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Receive updates straignt in your inbox every month</p>

              <div className='input flex' style={{justifyContent:'center', alignItems:'center'}} >
                <input type='text' placeholder='Email Address' style={{display:'flex',maxWidth:'180vh',marginLeft:'10vh'}}/>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
                  <button className='btn5' style={{height: '6vh'}}>Subscribe</button>
                </div>
                
              </div>
            </div>
          </div>

          
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 BAATO. Designd By Abhaya.</span>
      </div>
    </>
  )
}

export default Footer