import Jumbotron from "@/components/Jumbotron";
import OurMission from "@/components/OurMission";
import MeetOurLeaders from "@/components/MeetOurLeaders";
import PastEBLTrainings from "@/components/PastEBLTrainings";
import Footer from "@/components/Footer";
import React from "react";
import SideNav from "@/components/SideNav";
import Link from "next/link";

export default function About(){
    return(
        <>
            <SideNav/>
            <main>
                <Jumbotron classNames="jumbotron_about">
                    <div className="text-white text-center max-w-2xl mx-auto mt-36">
                        <p className="text-4xl font-black my-2">About Us</p>
                        <p>Our mission is to prepare the next generation for success ina rapidly evolving world by providing them with the skills and knowledge they need to thrive. Our training programs focus on three key areas: employability, business, and leadership. By equipping young people with these vital skills, we aim to help them build fulfilling careers, start successful businesses, and become effective leaders in their communities</p>
                    </div>

                    <Link href="/jointraining" className="text-center bg-ebl-primary text-white w-72 py-1.5 mx-auto block mt-7 rounded-md">
                        Join Training
                    </Link>
                </Jumbotron>
                <OurMission/>
                <MeetOurLeaders/>
                <PastEBLTrainings/>
                <Footer/>
            </main>
        </>
    )
}
