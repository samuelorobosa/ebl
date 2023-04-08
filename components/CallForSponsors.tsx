import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {IoCallSharp} from "react-icons/io5";

function CallForSponsors(){
    return(
        <div className="h-90 p-12 text-center rounded-md text-white max-w-6xl sm:mx-auto mx-3.5 bg-light-blue">
            <div className="max-w-4xl mx-auto">
                <h3 className="font-extrabold text-2xl my-4">Call for Sponsors</h3>
                <p className="text-white">
                    EBL is calling on individuals, businesses and corporate organizations to offer support in any form to sponsor subsequent trainings, which would help ensure that more young people are equipped with skills that make them assets in their places of employment in the future.
                </p>
                <aside className="flex sm:flex-row flex-col flex-wrap gap-4 justify-center mt-10">
                    <button className="bg-dark-blue px-4 py-2 justify-center rounded-md flex gap-2.5 items-center">
                        <AiOutlineMail/>
                        <span>Email Us</span>
                    </button>
                    <button className="border flex justify-center gap-2.5 items-center border-second-primary rounded-md px-4 py-2 text-second-primary">
                        <IoCallSharp/>
                        <span>Call Us</span>
                    </button>
                </aside>
            </div>
        </div>
    )
}

export default CallForSponsors;