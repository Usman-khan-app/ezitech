import React from 'react'

export default function Footer() {
  return (
    <div className='footer '>
        <div className="footerCard">
            <div className="fcard fristCard">
              <h2>About</h2>
              <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
            </div>
            <div className="fcard secondCard">
              <h2>Popular Courses</h2>
              <div className="subcard1">
                <img src="/public/sub1.webp" alt="s" />
                <h4>online arbitrage mastermind 2.0[.....</h4>
              </div>
              <p>By Hussain Ali</p>

              <div className="subcard1">
                <img src="/public/sub2.webp" alt="" />
                <h4>this is acerisce foryhtid inf </h4>
              </div>
              <p>By Ezitech</p>
            </div>
            <div className="fcard">
            <h2>PAGES</h2>

              <ul className="itmes">
                <li>BLOG</li>
                <li>EZICODING</li>
                <li>INTERNSHIP</li>
                <li>OUR SERVICES</li>
                

              </ul>
            </div>
            <div className="fcard">
              <h2>contect</h2>
              <div className="footerlocation">
              <a href="" className='ac'>
          <i className="ri-map-pin-line"></i>
               </a>
            <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
              </div>
              <div className="phone">
                
              <a href=""className='ac'>
          <i className="ri-phone-fill"></i>
               </a>
            <span> +92 3455555396</span>
            </div>
            <div className="email">
                
              <a href=""className='ac'>
              <i className="ri-mail-line"></i>
               </a>
            <span> info@ezitech.org</span>
            </div>

            </div>

        </div>
        <p className='last'>Copyright © 2024 Ezitech Institute | Design & Develop by &nbsp;
          <a href="">Eziline Software House</a></p>
    </div>
  )
}
