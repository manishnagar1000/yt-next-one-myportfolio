import Image from "next/image";
import Link from "next/link";
import React ,{useEffect, useState} from "react";
import logo from "../public/assests/logo.webp";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "portfolio",
  },
  {
    id: 3,
    link: "experience",
  },
  {
    id: 4,
    link: "me",
  },
  {
    id: 5,
    link: "contact",
  },
];

function Navbar() {

  const [navigation,setNavigation] = useState(false)
  const [pageScroll,setPageScroll] = useState(false)
  useEffect(()=>{
    const sub = window.addEventListener('scroll',()=>
      setPageScroll(window.scrollY>=90))
      return sub;
  },[])

  return (
    <div className={`w-full h-20 z-10 fixed bg-black text-white duration-300 ease-in ${pageScroll&&!navigation && 'bg-white text-black bg-opacity-50 backdrop-blur-xl  drop-shadow-lg'}`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-3xl p-4">
        <Link href="/#home">
          <Image
      src={logo}
       alt='logo'
    />
        </Link>
        <div>
          <ul className="hidden md:flex"> 
          {links.map(({ id, link }) => (
                <li key={id} className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
              <Link  href={`/#${link}`}>
              {link}
              </Link>
                </li>
            ))}
          </ul>

          {!navigation &&
            <div className="md:hidden cursor-pointer" onClick={()=>setNavigation(true)}>
            <FaBars size={30} />
          </div>
          }
         
        </div>
      </div>
      <div className={navigation?"md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur":""}>
        <div className={navigation?"fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500 z-[20]":"fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2 className="text-2xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">Manish</h2>
              </Link>

              <div onClick={()=>setNavigation(false)} className="p-3 cursor-pointer">
                <FaTimes size={30}/>
              </div>
            </div>
          <div className="mt-24 flex flex-col h-fit gap-20">
          <ul className="uppercase">
          {links.map(({id , link})=>(
            <li key={id} className="py-4 text-2xl tracking-wider cursor-pointer">
            <Link onClick={()=>setNavigation(false)}  href={`/#${link}`}>
            {link}
            </Link>

            </li>
          ))}
          </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
            <FaLinkedin size={25}/>
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
            <FaTwitter size={25}/>
            </div> 
            <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
            <FaFacebook size={25}/>
            </div>
             <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
            <FaGithub size={25}/>
            </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
