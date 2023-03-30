import React from 'react'
import html from "../public/assests/htmlex.png";
import css from "../public/assests/cssex.png";
import javascript from "../public/assests/javascriptex.png";
import react from "../public/assests/reactex.png";
import next from "../public/assests/nextex.png";
import tailwind from "../public/assests/tailwindex.png";
import Image from 'next/image';

function Experience() {

    const experiences = [
        {
            id:1,
            title:'HTML',
            src:html
        },
        {
            id:2,
            title:'Css',
            src:css
        },
        {
            id:3,
            title:'Javascript',
            src:javascript
        },
        {
            id:4,
            title:'React',
            src:react
        },
        {
            id:5,
            title:'Next',
            src:next
        },
        {
            id:6,
            title:'Tailwind',
            src:tailwind
        }

    ]
  return (
    <div id="experience" className="w-full ">
      <div className="max-w-screen-3xl mx-auto px-8 py-16 text-center md:text-left experince-img bg-cover  bg-fixed bg-center">
        <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-black font-bold">
          experience
        </h2>
        <p className="py-4 max-w-lg">
        I have 2 year of experience in building and desgining software.Currently ,I love to work on web applications using technologies like Javascript, React, Tailwind ,Next Js and Nodejs.
        </p>
        <div className='grid  lg-grid-cols-4 gap-8'>
      {experiences.map(({id,title,src}) =>(
        <div key={id} className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg 
        rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
            <Image src={src} width={100} height={100} alt={title}/>
            <h1 className='font-light'>{title}</h1>
        </div>
      ))}

 
        </div>
        </div>
        </div>
  )
}

export default Experience;