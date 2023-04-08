import Image from "next/image";
import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {IoIosCall} from "react-icons/io";

function Footer(){
    const DATE = new Date();
    const YEAR = DATE.getFullYear();
    return(
       <footer className="h-90 max-w-6xl mt-24 sm:mx-auto mx-3.5">
           <section className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-rows-2 border-b border-b-blacks2 py-10">
               <div>
                   <Image
                       width={100}
                       height={100}
                       src='/images/logo_1.png' alt="Brand Logo"/>
                   <p className="flex gap-2.5 text-blacks4 font-semibold text-xl my-2.5">
                       <AiOutlineMail/>
                       <span>jcinuniben@gmail.com</span>
                   </p>
                   <p className="flex gap-2.5 text-blacks4 font-semibold text-xl my-2.5">
                       <IoIosCall/>
                       <span>+234 701 067 5095</span>
                   </p>
               </div>
               <div className="flex sm:justify-around sm:gap-0 justify-start gap-6">
                   <div>
                       <p className="text-ebl-black font-bold mb-4">Socials</p>
                       <p className="text-ebl-black font-semibold my-3">Twitter</p>
                       <p className="text-ebl-black font-semibold my-3">Instagram</p>
                       <p className="text-ebl-black font-semibold my-3">LinkedIn</p>
                   </div>
                   <div>
                       <p className="text-ebl-black font-bold mb-4">Training</p>
                       <p className="text-ebl-black font-semibold my-3">EBL 2020</p>
                       <p className="text-ebl-black font-semibold my-3">EBL 2021</p>
                       <p className="text-ebl-black font-semibold my-3">EBL 2022</p>
                   </div>
               </div>
           </section>
           <div className="text-ebl-black grid sm:grid-rows-1 grid-rows-2 sm:grid-cols-[3fr_1fr] grid-cols-1 sm:text-left text-center py-4">
               <aside>© {YEAR} JCI UNIBEN. All rights reserved.</aside>
               <aside className="flex sm:justify-between justify-center gap-2.5">
                   <p>Terms of Service</p>
                   <p>Privacy</p>
               </aside>
           </div>
       </footer>
    )
}
export default Footer;