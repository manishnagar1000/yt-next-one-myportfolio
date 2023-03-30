import Image from 'next/image'
import React from 'react'
import contact from "../public/assests/contact.jpg";
import Link from 'next/link';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
function Contact() {
  return (
    <div id="contact" className="w-full ">
    <div className="max-w-screen-3xl mx-auto px-8 py-16 text-center md:text-left">
      <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-black font-bold">
       Get In Touch
      </h2>
      <div className='flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4 contact-img bg-cover   bg-fixed bg-center' >
        <div className='w-full md:w-1/2 h-full rounded-xl p-4 '>
        <Image src={contact} alt="contact" className='rounded-xl m-auto'/>
        <p className='pt-2 pb-8 text-center'>Thank you for visiting my portfolio! If you have any questions, comments, or just want to say hello, please do not hesitate to reach out.</p>
        <p className='pt-2 pb-8 text-center'>You can email me at <span className='font-bold'>[naaagarmanish123@gmail.com]</span>. I usually respond within 24 hours.</p>
        <p className='pt-2 pb-8 text-center'><span className='font-bold'>Phone No :</span>8383023265</p>
       
        <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
        <Link href="https://in.linkedin.com/in/manish-nagar-bb3b57186?trk=people-guest_people_search-card">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaLinkedin size={25}/>
            </div>
            </Link>
            <Link href="https://www.instagram.com/manishnaagar_/?igshid=ZDdkNTZiNTM%3D">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaInstagram size={25}/>
            </div> 
            </Link>
            <Link href="https://m.facebook.com/profile.php?id=100010476452803&v=info&ref=ig_profile_ac&funlid=GQynuSjzp7bT3nun">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaFacebook size={25}/>
            </div>
            </Link>
            <Link href="https://github.com/">
             <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaGithub size={25}/>
            </div>
            </Link>
              </div>
        </div>
        <div className='w-full md:w-1/2 h-full rounded-xl p-4'>
            <div className='p-4 text-left'>
                <form action='https://getform.io/f/fcc0d8bd-1280-48d5-827a-06ccd739497d' method='POST'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label htmlFor="name" className='capitalize text-sm py-2 text-slate-600 font-light'>name</label>
                    <input type='text' id='name' name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'></input>
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="phone" className='capitalize text-sm py-2 text-slate-600 font-light'>phone</label>
                    <input type='number' id='phone' name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'></input>      
                    </div>
                    <div className='flex flex-col col-span-2'>
                    <label htmlFor="email" className='capitalize text-sm py-2 text-slate-600 font-light'>email</label>
                    <input type='email' id='email' name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'></input>
                    </div>
                    <div className='flex flex-col col-span-2'>
                    <label htmlFor="message" className='capitalize text-sm py-2 text-slate-600 font-light'>message</label>
                    <textarea id='message' name='message' rows='10' className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200'></textarea>
                    </div>
                   </div>

                   <div className='flex justify-center items-center'>
                    <button className='my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md
                     tracking-wider cursor-pointer hover:scale-105 duration-200'>Send Message</button>
                   </div>
                </form>
            </div>
        </div>

      </div>
      </div>
      </div>
  )
}

export default Contact