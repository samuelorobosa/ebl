import Image from "next/image";

export default function OurMission(){
    return(
        <div className="grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2  items-center gap-4 max-w-6xl mx-auto py-24 px-5">
            <aside className="text-ebl-black sm:text-left text-center">
                <h2 className="text-3xl font-black my-2.5">Our Mission</h2>
                <p>
                    Our training is designed to be practical and hands-on, giving young people the opportunity to develop the skills they need in a real world context. Whether they are learning about the latest technology trends, honing their communication and collaboration skills, or exploring the in and out of entrepreneurship, our programs are tailored to meet the needs of today’s young people
                </p>
            </aside>
            <aside>
                <Image width={722} height={510} src="/images/our_mission.png" alt="Our Mission"/>
            </aside>
        </div>
    )
}