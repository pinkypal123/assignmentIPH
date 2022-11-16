import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footercontainer'>
       
       <div className='footerConContent'>
       <p className='paragraphFooter'>Keep in touch, join our newSletter, </p>
        <div className='footerContent'>
            <div className='enterEmail'> Enter your email id</div>
            <div className='submitButton'>Submit</div>
        </div>
       </div>
    </div>
    <div className='footer1'>
        <div className='aboutFooter1'>
            <h3>About Us</h3>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero corrupti quae alias dolor, voluptatibus mollitia cupiditate,</p> 
        </div>
        <div className='aboutFooter'>
        <div className='aboutFooter2'>
            <h3>About Us</h3>
           <p>Home</p> 
           <p>About us</p>
           <p>Contact</p>
        </div>
        <div className='aboutFooter2'>
            <h3> support</h3>
           <p> FAQ</p> 
           <p>Term & condition</p>
        </div>
        <div className='aboutFooter2'>
            <h3>Social</h3>
           <div className='footerIcon1'><i className="fa-brands fa-facebook"></i> 
           <i className="fa-brands fa-twitter"></i></div>
           <div className='footerIcon2'>
           <i className="fa-brands fa-square-instagram"></i>
           <i className="fa-brands fa-linkedin"></i>
           </div>
        </div>
        </div>
    </div>
    <footer>
    <div class="footerCenter">
            Copyright &copy; www.myonline.com. All rights reserved!
        </div>
    </footer>
      
    </>
  )
}

export default Footer
