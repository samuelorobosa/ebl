import Image from "next/image";
import {isOddValue} from "@/utils/isOddValue";

function PastEBLTrainings(){
    const images = [
        { src: "/images/pasttraining0.png", alt: "Past Training 0" },
        { src: "/images/pasttraining1.png", alt: "Past Training 1" },
        { src: "/images/pasttraining2.png", alt: "Past Training 2" },
        { src: "/images/pasttraining3.png", alt: "Past Training 3" },
        { src: "/images/pasttraining4.png", alt: "Past Training 4" },
        { src: "/images/pasttraining5.png", alt: "Past Training 5" },
        { src: "/images/pasttraining6.png", alt: "Past Training 6" },
        { src: "/images/pasttraining7.png", alt: "Past Training 7" },
    ];
    return(
        <section className="max-w-6xl mx-auto py-24 px-5 text-center">
                <h2 className="text-ebl-black text-3xl font-black my-2.5">Past EBL Trainings</h2>
                <p className="text-ebl-black">Take a look back at the impactful events that have shaped our journey</p>

            <div className="mt-10 grid sm:grid-cols-4 grid-cols-2 gap-x-3.5 sm:gap-y-10">
                {images.map((image, index) => (
                    <Image
                        className={`${isOddValue(index) ? 'sm:mt-10 mt-20':''}`}
                        key={image.src}
                        width={250}
                        height={495}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
        </section>
    )
}

export default PastEBLTrainings;