import React from 'react'

export default function Services() {
    let servesCard=[
        {
            id:1,
            title:"ML & Al",
            svg:"/public/s1.webp"
        },
        {
          id:2,
          title:"Block Chain",
          svg:"/public/s2.webp"
      },
      {
        id:3,
        title:"Amazone",
        svg:"/public/s3.webp"
    },
    {
      id:4,
      title:"Cyber Security",
      svg:"/public/s4.webp"
  },
  {
    id:5,
    title:"Development",
    svg:"/public/s5.webp"
},
{
  id:6,
  title:"Desingning",
  svg:"/public/s6.webp"
},
{
  id:7,
  title:"Gaming",
  svg:"/public/s7.webp"
},
{
  id:8,
  title:"Architicter",
  svg:"/public/s8.webp"
},
{
  id:9,
  title:"IOS & AND",
  svg:"/public/s9.webp"
},
{
  id:10,
  title:"Marketing",
  svg:"/public/s10.webp"
},
{
  id:11,
  title:"3D",
  svg:"/public/s11.png"
},
{
  id:12,
  title:"Animation",
  svg:"/public/s12.png"
},
    ]
  return (
    <div className="services">
      {
        servesCard.map(Card =>
            <>
              <div className="service-card">
            <img src={Card.svg} alt="" />
            <h2>{Card.title}</h2>
            </div>
            </>
        )
      }
       


        </div>
  )
}
