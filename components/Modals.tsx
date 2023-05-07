import Image from "next/image";
import {useContext} from "react";
import ModalContext from "@/context/Modal/ModalContext";
import {NextRouter, useRouter} from "next/router";
import {motion} from "framer-motion";
import Link from "next/link";


function Modals(){
    const router:NextRouter = useRouter();

    const { modalState, modalDispatch } = useContext(ModalContext);

    const removeAllModals = () => {
        modalDispatch({type:2})
        router.push('/')
    }
    return(
        <>
            <motion.section
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                duration: 0.7,
            }}
                className={`fixed left-0 top-0 right-0 bottom-0 z-[100] bg-[rgba(26,31,43,0.8)] text-center ${!(modalState) || modalState[1] ? '':'hidden'}`}>
                <div className="h-[28rem] max-w-2xl w-full shadow-[4px_-4px_4px_rgba(169,169,169,0.2),-4px_4px_4px_rgba(169,169,169,0.2)] -translate-x-1/2 -translate-y-1/2 top-[55%] left-[50%] bg-white rounded-xl p-[1em_1.5em_1em_1.5em] justify-around flex flex-col absolute">
                    <Image className="mx-auto" src="/images/mail.png" width={200} height={200} alt="Mail"/>
                    <header className="max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-blacks4">Congratulations! Your application was successful</h3>
                        <p className="mt-2">Click on the link below to join the Whatsapp group for updates on the upcoming masterclass.</p>
                        <Link className="mt-3 inline-block text-ebl-primary2 underline" href="https://chat.whatsapp.com/JSfyWx9fIcK00AbScH7AB0">
                            Join Now
                        </Link>
                    </header>
                    <button onClick={()=>removeAllModals()} className="bg-transparent text-ebl-primary2 border border-ebl-primary2 rounded-lg py-2 px-1 w-1/2 mt-2 block mx-auto">
                        Return to Home
                    </button>
                </div>
            </motion.section>
        </>
    )
}

export default Modals;