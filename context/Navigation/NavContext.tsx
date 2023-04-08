import React, {createContext, useState} from "react";

type navState = Partial<boolean> | undefined;

const NavContext = createContext<{ open: navState; toggleNavbar: () => void} | null>(null);
export const NavProvider = ({children}:any) => {
    const [open,setOpen] = useState(false);
    const toggleNavbar = () =>{
        setOpen(prevState => !prevState);
    }
    return (
        <NavContext.Provider
            value={{
                open,
                toggleNavbar
            }}
        >
            {children}
        </NavContext.Provider>
    );
};

export default NavContext