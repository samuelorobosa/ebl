import React, {createContext, useReducer} from 'react';
import {ModalReducer} from "@/context/Modal/ModalReducer";

type ModalState = Partial<boolean[]> | undefined;

const ModalContext = createContext<{ modalState: ModalState; modalDispatch: React.Dispatch<any> } | null>(
    null
);

export const ModalProvider : React.FC<React.ReactNode> = ({ children }:any) => {
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
