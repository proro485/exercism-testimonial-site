import React, { useState } from 'react'
import zigzag from '../assets/zigzag.svg'
import testimonial from '../assets/testimonial.svg';
import List from './List';

export default function Page() {
  const [tracksCount, setTracksCount] = useState({});

  return (
    <div className="flex flex-col justify-center">
      <div className="mt-10 mb-9">
        <img className="
          mb-3 m-auto
          block" src={testimonial} alt=""
        />
        <div className="
          gap-4
          flex flex-wrap justify-center items-center
          font-poppins"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-darkPurple text-center">
            Testimonials I've left
          </h2>
          {
            tracksCount['all'] != undefined && <div className="
              px-3 py-1 
              text-sm text-lightPurple
              border border-anotherFaintPurple
              rounded-[100px]"
            >
              {tracksCount["all"]}
            </div>
          }
        </div>
        <img className="
          pt-4
          m-auto
          block" src={zigzag} alt="" />
      </div>
      <List tracksCount={tracksCount} setTracksCount={setTracksCount} />
    </div>
  );
}
