import Jumbotron from "@/components/Jumbotron";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";
import CallForSponsors from "@/components/CallForSponsors";
import Footer from "@/components/Footer";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideNav from "@/components/SideNav";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <SideNav/>
      <main>
          <Jumbotron classNames="jumbotron_index">
              <div className="text-white text-center max-w-lg mx-auto mt-24">
                  <p>EBL Masterclass</p>
                  <h2 className='font-extrabold text-4xl my-3'>Equipping youths with relevant skills needed for the future</h2>
                  <p>Employability, Business and Leadership Masterclass is aimed at exploring employability, business and leadership as vital skills needed in our ever changing world.</p>
              </div>

              <Link href="/joinmasterclass" className="bg-ebl-primary text-center text-white w-72 py-1.5 mx-auto block mt-7 rounded-md">
                  Join Masterclass
              </Link>
          </Jumbotron>
          <WhatWeDo/>
          <Testimonials/>
          <CallForSponsors/>
          <Footer/>
      </main>
    </>
  )
}
