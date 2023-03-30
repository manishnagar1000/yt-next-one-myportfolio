import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

function Me() {
  return (
    <div id="me" className="w-full ">
      <div className="shadow-xl shadow-blue-300 max-w-screen-3xl mx-auto px-8 py-16 text-center md:text-left bg-cover bg-fixed bg-center me-img">
        <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-black font-bold">
          me
        </h2>

        <div className=" my-8 px-8">
          <p className="py-4 max-w-3xl mx-auto">
            Hi, I am <span className="font-bold">Manish Nagar</span>, a{" "}
            <span className="font-bold">front-end developer</span> with{" "}
            <span className="font-bold">2 years</span> of experience in building
            user-friendly and responsive web applications. I have a passion for
            crafting visually appealing and intuitive experiences, and I always
            strive to stay up-to-date with the latest web technologies and
            design trends.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            I have a strong foundation in HTML, CSS, and JavaScript, and I have
            experience working with popular front-end frameworks such as React
            , Vue.js and Next. I am also familiar with version control systems like
            Git, and I have experience with responsive design, cross-browser
            compatibility, and accessibility standards.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            When I am not coding, you can find me reading about new
            technologies, experimenting with new design techniques, or playing
            video games. I am always eager to learn and grow as a developer, and
            I am committed to delivering high-quality results for every project
            I work on.
          </p>
        </div>

        <div className="flex justify-center items-center gap-10">
          <Link href="/Resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              resume{" "}
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              my portfolio{" "}
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Me;
