import React from 'react'
import zigzag from '../assets/zigzag.svg'
import testimonial from '../assets/testimonial.svg';
import List from './List';

export default function Page() {
  return (
    <div className="page flex flex-col justify-center">

      <div className="testimonial_title mt-10 mb-9">
        <img className="mb-3 block m-auto" src={testimonial} alt="" />
        <h2 className="font-poppins text-center text-[#130B43] text-3xl font-bold">Testimonials I've left</h2>
        <img className=" block m-auto pt-4" src={zigzag} alt="" />
      </div>

      <List />

    </div>
  );
}
