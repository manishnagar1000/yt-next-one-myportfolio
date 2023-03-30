import React from "react";
import { MdExpandMore } from "react-icons/md";
import react from "../public/assests/react.jpg";
import next from "../public/assests/next.jpg";
import tailwind from "../public/assests/tailwind.jpg";
import javascript from "../public/assests/javascript.jpg";
import Link from "next/link";
import Image from "next/image";

function PortFolio() {
  const portfolio = [
    {
      id: 1,
      title: "React Weather app",
      imageSrc: react,
      url: "react",
    },
    {
      id: 2,
      title: "next Weather app",
      imageSrc: next,
      url: "next",
    },
    {
      id: 3,
      title: "tailwind Weather app",
      imageSrc: tailwind,
      url: "tailwind",
    },
    {
      id: 4,
      title: "Javascript Weather app",
      imageSrc: javascript,
      url: "javascript",
    },
  ];

  return (
    <div id="portfolio" className="w-full ">
      <div className="max-w-screen-3xl mx-auto px-8 py-16 text-center md:text-left bg-cover bg-center portfolio-img">
        <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-black font-bold">
          PortFolio
        </h2>
        <p className="py-4 text-lg max-w-lg ">
        Quotes:- “To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success”
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolio.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shodow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                  width={1000}
                  height={500}
                />
                <h2 className="text-center  text-base capitalize my-4 font-light duration-200
                 group-hover:underline underline-offset-4">{title}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
        <Link href="/#portfolio">
      <div className='group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
        all project <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-5'><MdExpandMore size={25}/></span>
      </div>
    </Link>
        </div>
      
      </div>
    </div>
  );
}

export default PortFolio;
