import {AiOutlineClose} from "react-icons/ai";
import React, {useContext} from "react";
import NavContext from "../context/Navigation/NavContext";
import Link from "next/link";

export default function SideNav (){
    const navContext = useContext(NavContext);
    if(!navContext) return null;
    const {open, toggleNavbar} = navContext;
    return(
        <nav className={`h-full ${open ? 'w-2/3':'w-0'} fixed z-50 top-0 right-0 bg-ebl-primary transition-all duration-500 overflow-hidden`}>
            <div className="text-white mt-10 flex justify-end mr-5">
                <AiOutlineClose onClick={()=>toggleNavbar()} size={30}/>
            </div>
            <div className="mt-5 text-2xl ml-5 text-white block">
                <Link href="/about" className="py-4 pl-10 pr-12 block w-full whitespace-nowrap"> About Us</Link>
                <Link href="/jointraining" className="py-4 pl-10 pr-12 block w-full whitespace-nowrap"> Join Training</Link>
            </div>
        </nav>
    )
}