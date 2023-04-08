import Navbar from "@/components/Navbar";
import React, {ReactNode} from "react";

interface JumbotronProps {
    children: ReactNode;
    classNames: string;
}
function Jumbotron({children, classNames}:JumbotronProps){
    return(
        <section className={classNames}>
            <Navbar/>
            {children}
        </section>
    )
}
export default Jumbotron;