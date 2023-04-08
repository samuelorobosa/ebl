import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext} from "react";
import {HiBars3BottomRight} from "react-icons/hi2";
import NavContext from "@/context/Navigation/NavContext";

const Navbar = () => {
    const ROUTER = useRouter();
    const NAVIGATE_TO_PREVIOUS = () => {
        ROUTER.back()
    }
    let pathname = ROUTER.pathname;

    const {toggleNavbar} = useContext(NavContext);

    return(
        <div className="flex justify-between items-center py-5 max-w-6xl mx-auto text-white">
            <Link href="/">
                <Image
                    width={100}
                    height={100}
                    src='/images/logo_1.png' alt="Brand Logo"/>
            </Link>

            <aside className="hidden sm:block">
                {
                    pathname !== '/jointraining' ?
                        (
                            <aside className="flex gap-6 -mt-2.5 mr-2.5">
                                <Link href="/about">About Us</Link>
                                <Link href="/jointraining">Join Training</Link>
                            </aside>
                        ):
                        (
                            <button onClick={()=>NAVIGATE_TO_PREVIOUS()} className="text-ebl-primary">
                                Back to previous
                            </button>
                        )
                }
            </aside>
            <aside className="sm:hidden block">
                <HiBars3BottomRight onClick={()=>toggleNavbar()} size={30}/>
            </aside>
        </div>
    )
}
export default Navbar;