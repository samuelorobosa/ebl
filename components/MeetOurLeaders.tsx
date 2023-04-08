import Image from "next/image";
import React from "react";
import {FiMail} from "react-icons/fi";

function MeetOurLeaders(){
    const ORGANISATION_LEADERS = [
        {
            id: 'seyiodebode',
            name: 'Seyi Odebode',
            title: 'President, JCIN UNIBEN',
            contact: {
                'email': 'odebodeoluwaseyilucky @gmail.com'
            }
        },
        {
            id: 'joshuaosayamen',
            name: 'Joshua Osayamen',
            title: 'Vice President, JCIN UNIBEN',
            contact: {
                'email': 'osjoshua24@gmail.com'
            }
        },
        {
            id: 'iweluegimpascal',
            name: 'Iweluegim Pascal ',
            title: 'VP Projects, JCIN UNIBEN',
            contact: {
                'email': 'pascal3539@gmail.com'
            }
        },
        {
            id: 'enusonumemeka',
            name: 'Enusonum Emeka',
            title: 'EBL Director, JCIN UNIBEN',
            contact: {
                'email': 'emekajerry514@gmail.com'
            }
        }

    ]
    return(
        <section className="bg-tertiary1 text-center py-20 px-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-black my-2.5">Meet Our Leaders</h2>
                <p>Meet the visionary leaders driving our mission forward</p>

                <section className="grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-1 grid-rows-4 gap-4 mt-10">
                    {
                        ORGANISATION_LEADERS.map(({id, name, title, contact:{email}})=>{
                            return(
                                <div key={id} className="border border-blacks3 rounded-md h-full px-2.5 py-10">
                                    <Image className="mx-auto" src={`/images/${id}.png`} alt={name} width={120} height={120}/>
                                    <h2 className="text-ebl-black font-bold text-2xl mt-2.5">{name}</h2>
                                    <p className="text-off-black">{title}</p>
                                    <aside className="mx-auto mt-5 gap-1.5 inline-flex items-center">
                                        <div>
                                            <FiMail size={20} className="inline-flex text-ebl-primary"/>
                                                &nbsp;
                                            {email}
                                        </div>
                                    </aside>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default MeetOurLeaders;