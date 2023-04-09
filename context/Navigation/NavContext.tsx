import React, {createContext, useState} from "react";

type navState = Partial<boolean> | null;

interface NavContextType {
    open: navState;
    toggleNavbar: () => void
}
const NavContext = createContext<NavContextType>({
    open: null,
    toggleNavbar: () => null,
});
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