import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

function Me() {
  return (
    <div id="me" className="w-full ">
      <div className="shadow-xl shadow-blue-300 max-w-screen-3xl mx-auto px-8 py-16 text-center md:text-left bg-cover bg-fixed bg-center me-img">
        <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-blue-500 font-bold">
          me
        </h2>

        <div className=" my-8 px-8">
          <p className="py-4 max-w-3xl mx-auto">
            Still fact door fancy and but each, above my stopped in before more
            i and me. This ghost soul sign the my, once no ghastly and heaven
            leave of hath. Whose more into grew youhere stock stately. Nothing
            thing shall no upon sir for that angels. He truly some rapping.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            Still fact door fancy and but each, above my stopped in before more
            i and me. This ghost soul sign the my, once no ghastly and heaven
            leave of hath. Whose more into grew youhere stock stately. Nothing
            thing shall no upon sir for that angels. He truly some rapping.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            Still fact door fancy and but each, above my stopped in before more
            i and me. This ghost soul sign the my, once no ghastly and heaven
            leave of hath. Whose more into grew youhere stock stately. Nothing
            thing shall no upon sir for that angels. He truly some rapping.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            Still fact door fancy and but each, above my stopped in before more
            i and me. This ghost soul sign the my, once no ghastly and heaven
            leave of hath. Whose more into grew youhere stock stately. Nothing
            thing shall no upon sir for that angels. He truly some rapping.
          </p>
      
        </div>

        <div className="flex justify-center items-center gap-10">
            <Link href="/Resume.pdf" download={true}>
            <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
        resume <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-5'><MdExpandMore size={25}/></span>
      </div>
      </Link>
      <Link href="/#portfolio" >
            <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
        my portfolio <span className='-rotate-90 duration-100 ease-in group-hover:-rotate-180'><MdExpandMore size={25}/></span>
      </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Me;
