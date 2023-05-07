import {AiOutlineClose} from "react-icons/ai";
import React, {useContext, useEffect, useRef, useState} from "react";
import NavContext from "../context/Navigation/NavContext";
import Link from "next/link";

export default function SideNav (){
    const {open, toggleNavbar} = useContext(NavContext);
    const sideBarRef = useRef<HTMLElement>(null);
    const [isClickedOutside, setIsClickedOutside] = useState(false)

    // Close SideNav when route is changing
    const handleRouteChange = () => {
        toggleNavbar();
    }

    useEffect( () => {

        const body = document.querySelector("body")!;
        const handleClickOutside = (event: MouseEvent) => {
            if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
                setIsClickedOutside(true)
            }
        }

        if (open){
            //prevent scrolling on body
            body.classList.add("overflow-hidden");

            // attach event listener to document
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            //allow scrolling on body
            body.classList.remove("overflow-hidden");
        }
            // remove event listener from document
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[open]);


    useEffect(() => {
        if (isClickedOutside) {
            toggleNavbar();
            setIsClickedOutside(false);
        }
    }, [isClickedOutside, toggleNavbar])
    return(
        <>
            <div className={`${open ? 'block' : 'hidden'} transition-all bg-[rgba(255,255,255,0.6)] h-screen fixed top-0 left-0 w-full`}></div>
            <aside ref={sideBarRef} className={`h-full ${open ? 'w-2/3':'w-0'} fixed z-50 top-0 right-0 bg-ebl-primary transition-all duration-500 overflow-hidden`}>
                <div className="text-white mt-10 flex justify-end mr-5">
                    <AiOutlineClose onClick={()=>toggleNavbar()} size={30}/>
                </div>
                <div className="mt-5 text-2xl ml-5 text-white block">
                    <Link href="/about" className="py-4 pl-10 pr-12 block w-full whitespace-nowrap">
                        <span onClick={()=>handleRouteChange()}>About Us</span>
                    </Link>
                    <Link href="/joinmasterclass" className="py-4 pl-10 pr-12 block w-full whitespace-nowrap">
                        <span onClick={()=>handleRouteChange()}>Join Training</span>
                    </Link>
                </div>
            </aside>
        </>
    )
}