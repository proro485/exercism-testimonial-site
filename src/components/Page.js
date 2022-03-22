import React, { useState } from 'react'
import zigzag from '../assets/zigzag.svg'
import testimonial from '../assets/testimonial.svg';
import List from './List';

export default function Page() {
  const [tracksCount, setTracksCount] = useState({});

  return (
    <div className="page flex flex-col justify-center">

      <div className="testimonial_title mt-10 mb-9">
        <img className="mb-3 block m-auto" src={testimonial} alt="" />
        <div className="title flex flex-wrap justify-center font-poppins items-center gap-4">
          <h2 className="text-center text-[#130B43] text-2xl sm:text-3xl font-bold">Testimonials I've left</h2>
          {
            tracksCount['all'] != undefined && <div className="total_testimonials px-3 py-1 
              text-sm text-[#5C5589] rounded-[100px] border border-[#CBC9D9]"
            >
              {tracksCount["all"]}
            </div>
          }
        </div>
        <img className=" block m-auto pt-4" src={zigzag} alt="" />
      </div>

      <List tracksCount={tracksCount} setTracksCount={setTracksCount} />

    </div>
  );
}
