import React, {createContext, useReducer} from 'react';
import {ModalReducer} from "@/context/Modal/ModalReducer";

type ModalState = Partial<boolean[]> | null;

interface ModalContextType {
    modalState: ModalState;
    modalDispatch: React.Dispatch<any>;
}

const ModalContext = createContext<ModalContextType>({
    modalState: null,
    modalDispatch: () => {},
});

export const ModalProvider  = ({ children }:any) => {
    const modal = [false, false, false];
    const [modalState, modalDispatch] = useReducer(ModalReducer, modal);

    return (
        <ModalContext.Provider
            value={{modalState, modalDispatch}}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
