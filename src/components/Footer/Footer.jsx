import React from 'react'
import  './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acceccories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, minima tempore 
            ipsam repudiandae blanditiis dolor nemo aliquam culpa eligendi neque in fugit rem, 
            officiis, consequuntur nihil eos? Iusto sequi, nam atque nemo sunt magnam!
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, minima tempore 
            ipsam repudiandae blanditiis dolor nemo aliquam culpa eligendi neque in fugit rem, 
            officiis, consequuntur nihil eos? Iusto sequi, nam atque nemo sunt magnam!
          </span>
        </div>

      </div>
      <div className="bottom">

      <div className="left">
        <span className='logo'>Sharmastore</span>
        <span className='copyright'>  © Copyright 2023. All Rights Reserved</span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Footer
