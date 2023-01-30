import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroImage from '../public/assests/heroImage.jpg'
import {MdExpandMore} from 'react-icons/md'

const HomePage = () =>{
return(
  <div id='home' className='h-screen w-full text-center  bg-fixed bg-center bg-cover custom-img'>
  
    <div className='max-w-screen-3xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-center items-center '>
    <div className='w-72 h-72 mx-auto overflow-hidden rounded-xl'>
      <Image src={HeroImage} alt="me"/>
    </div>

    <h1 className='uppercase font-bold text-white text-2xl md:text-7xl my-4'>full stack developer</h1>
    <p className='text-white text-xl max-w-sm mx-auto'>
      I have 2 year of experience building and desgining software.Currently ,I love to work on web application using technologies 
      like React, Tailwind ,Next Js and GraphQL.
    </p>
    <Link href="/#me">
      <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
        know More <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'><MdExpandMore size={25}/></span>
      </div>
    </Link>
    </div>
  </div>
)
}

export default HomePage