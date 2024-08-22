import React from "react";
import Navbar from "./Navbar";
gsap.registerPlugin(ScrollTrigger);
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './YourComponent.css'; // Ensure you have appropriate CSS for styling


export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".content, .small-text",
      { filter: "blur(0px)" },
      { 
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: ".big-text",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          
        }
      }
    );

 
  }, []);
  useEffect(() => {
    const texts = gsap.utils.toArray('.scroll-text');

    gsap.fromTo(
      texts,
      { y: '100px', opacity: 0 },
      {
        y: '0px',
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  }, []);
  
  return (
    <div className="hero-section" id="Home">
      <div className="overlay">
        <Navbar />
        <div className=" big-text ">
          <div className="content">
            <h1 >
              Learn the fundaminatals with our &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experts in 
              
            </h1>
            
          </div>
          <div className="small-text">
            <h1>Utilize Effective Learning to Reach Your Potential!</h1>
          </div>
        </div>
        <span className="no-blur" style={{color:" #00CBFF"}}>Web desining</span>
        <div className="form">
          <input type="text" placeholder="search here" />
          <div className="inputsearch">
            <a href="">
              <i className="ri-search-line"></i>
            </a>
          </div>
        </div>
      <div className="small-text-down">
        <h2>Explore our more usefull products</h2>
      </div>
      <div className="logo-card">
        <div className="card card1"></div>
        <div className="card card2">
          <img src="/public/img2.png" alt="" />
        </div>
        <div className="card card3">
          <img src="/public/img3.png" alt="" />
        </div>
      </div>

      </div>

    </div>
  );
}
