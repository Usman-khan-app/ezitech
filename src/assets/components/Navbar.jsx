import React from 'react'

export default function Navbar() {
  return (
    <div className=' navbar-top'>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid bg">
    <div className="nav-logo">
    <a className="navbar-brand" href="#">
        <img src="/public/logo.png" className='logo-img' alt="" />
    </a>
    </div>
    <button className="navbar-toggler burger " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent " aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon burger "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-5 mb-2 mb-lg-0 nav-list">
        <li className="nav-item mx-3">
          <a className="nav-link   text text1" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">About Us</a>
          <ul className='dropmenu'>
          <li className="droplist">
              usman
            </li><li className="droplist">
              usman
            </li>

          </ul>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">Certifications</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">Careers</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">Seminars</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">Tech Blogs</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link  text1" aria-current="page" href="#">IPortal Login</a>
        </li>
       
        
      </ul>
      
    </div>
    <div className="nav-icon">
        <div className="heart">
            <a href="" className='ac'>
            <i className="ri-heart-line"></i>
            </a>
        </div>
        <div className="search">
            <a href="" className='ac'>
            <i className="ri-search-line"></i>
            </a>
        </div>
        
        

    </div>
    <div className="logins">
    <i className="ri-user-3-line"></i>
    </div>
  </div>
</nav>
    </div>
  )
}
