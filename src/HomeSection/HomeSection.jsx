import React from 'react'
import './HomeSection.css'
const HomeSection = () => {
  return (
    <>
      <section className='homeSection'>
        <div className='content'>
          <div className='foodContentImg'>
            <img src="https://cdn.pixabay.com/photo/2020/03/13/20/16/paneer-tikka-4929034_960_720.jpg" alt=""></img>
          </div>
          <h3>Behrouz Biryani (South Extension)</h3>
          <p className='biryani'>Biryani</p>
          <span className='icons'>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            (2,3)
          </span>
        </div>
        <div className='footerHome'>
          Behrouz Biryani (South Extension) can deliver to you at Nagpur
          <span className="locationChange">
            <i className="fa-solid fa-location-dot"></i>
            Change Location

          </span>
        </div>
      </section> 
    </>
  )
}

export default HomeSection

