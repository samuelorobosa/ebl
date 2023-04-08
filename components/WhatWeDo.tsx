import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";

function WhatWeDo(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const WHAT_WE_DO = [
        {
            id: 0,
            header: 'Leadership',
            body: 'Everyone is passionate to make an impact in the society. The ability to lead equips you to improve both your personal life and society. With this training, you’d be taught how to develop and employ effective leadership skills.'
        },
        {
            id: 1,
            header: 'Employability',
            body: 'Employability skills are key indicators of good job performance and career success. With this training, you can build good employability skills to help stand out in a hiring process, an actual work environment and even your career.'
        },
        {
            id: 2,
            header: 'Business',
            body: 'Almost every undergraduate has a desire to start a business, seeing it through to success, and retiring rich. This masterclass will equip you with requisite skills set to move it from ideation and ultimately to success.'
        },
    ]

    return <section className="h-full max-w-6xl mx-auto mt-24">
            <h2 className="text-center font-black text-2xl">What We Do</h2>
            <Slider {...settings} className="grid grid-cols-[repeat(3,_1fr)] gap-5 mt-10">
                    {
                        WHAT_WE_DO.map(({id,header,body}) => <article key={id} className="p-2.5 h-[30rem] border border-ebl-primary rounded-md text-center">
                                <Image
                                    className="object-cover mx-auto my-2.5  h-[120px] w-[120px] rounded-full text-center"
                                    width={120}
                                    height={120}
                                    src={`/images/${header.toLowerCase()}.jpeg`} alt="description_image"/>
                            <h2 className="text-xl my-2 text-center font-bold">{header}</h2>
                            <p className="text-blacks4">{body}</p>
                            <Link href="/jointraining" className="bg-white border-ebl-primary border text-ebl-primary w-52 mb-10 py-1.5 mx-auto block mt-10 rounded-md">
                                Join Training
                            </Link>
                        </article>)
                    }
            </Slider>
    </section>
}

export default WhatWeDo;