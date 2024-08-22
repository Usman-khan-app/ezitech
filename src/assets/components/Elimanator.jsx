import React from 'react'
import Services from './Services'

export default function Elimanator() {
    let svg =["/public/svg1.png","/public/svg2.png","/public/svg3.png"]
  return (
    <div className='elemanator-page'>
        <h1 className='container elemantor-heading'>How it work?</h1>
        <div className="tatimonails container">
            {
                svg.map(x=>
                    <>
            <div className="svg-card">
                <img src={x} alt="" />
            </div>

                    </>

                )
            }
           

            
        </div>
        <Services />
    </div>
  )
}
