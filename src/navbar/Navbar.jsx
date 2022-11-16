import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navigate=useNavigate()
    const loginPage=()=>{
        navigate('/signup')
    }
    const homePage=()=>{
      navigate('/')
    }
  return (
    <>
    <nav className='navbar'>
      <div className='leftside'>  Kin Kao | Just eat</div>
      <div className='rightside'>
        <span onClick={homePage} style={{cursor:'pointer'}}>Home</span>
        <span>About Us</span>
        <span>Contact</span>
        <span className='loginButton' onClick={loginPage}>signup/Registration</span>
        </div>  
    </nav>
    {/* <section className='home'>
        <div className='content'>
            <h3>Behrouz Biryani (South Extension)</h3>
            <p>Biryani</p>
            <span></span>
        </div>
    </section> */}
    </>
  )
}

export default Navbar
