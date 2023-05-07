import {ImQuotesLeft} from "react-icons/im";
import React from "react";
import Slider from "react-slick";

function Testimonials(){
    const testimonial_settings = {
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
    const TESTIMONIAL_DATA = [
        {
            id: 'divine_tega_ukeghe',
            name: 'Divine Tega Ukeghe',
            comment: 'The employability skills training helped me get a better understanding of corporate culture and set me up real good for the future ahead of me.',
            footer: 'EBL 2022'
        },
        {
            id: 'osato_mercy',
            name: 'Osato Mercy',
            comment: 'The masterclass has helped me expand my knowledge , build a network of peers, foster personal growth, and increase my confidence as a leader.',
            footer: 'EBL 2022'
        },
        {
            id: 'idehen_violet',
            name: 'Idehen Violet',
            comment: 'The masterclass has helped me learn how to optimize my processes, improve my service offerings and increase my profitability.',
            footer: 'EBL 2022'
        }
    ]
    return <section className="h-90 max-w-6xl w-11/12 mx-auto mt-24">
        <h2 className="text-center font-black text-2xl">What People Say About Us</h2>
        <Slider {...testimonial_settings} className="grid grid-cols-3 grid-rows-1 justify-between gap-5 my-20 text-white">
            {
                TESTIMONIAL_DATA.map(({id, name, comment, footer})=>{
                    return <article key={id} className={`testimonial testimonial_${id}`}>
                        <h2 className="font-extrabold text-xl my-2">{name}</h2>

                        <ImQuotesLeft className="text-white"/>

                        <p>{comment}</p>

                        <ImQuotesLeft className="text-white self-end rotate-180"/>

                        <p>{footer}</p>
                    </article>
                })
            }
        </Slider>
    </section>
}

export default Testimonials;