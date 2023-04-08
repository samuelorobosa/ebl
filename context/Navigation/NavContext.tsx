import {createContext, useState} from "react";

const NavContext = createContext({});
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