import React, { useState } from 'react';
import search from '../assets/search.svg';
import hexLogo from '../assets/hexLogo.svg';
import dropdown from '../assets/dropdown.svg';
import dropdownBig from '../assets/dropdownBig.svg';
import Testimonials from './Testimonials';

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="list min-h-[70vh] mb-11 mx-8 shadow-[0_4px_42px_0px_rgba(79,114,205,0.15)] rounded-lg">
      <div className="list_header flex justify-between m-4">

        <div className="list_headerRight flex">
          <img className="ml-2 mr-3" src={hexLogo} alt="" />
          <img className="mr-4 cursor-pointer" src={dropdown} alt="" />
          <div className="search rounded-[5px] w-[416px] flex bg-[#F0F3F9] text-[#5C5589]">
            <img className="ml-5" src={search} alt="" />
            <input className="bg-[#F0F3F9] rounded-[5px] w-full mx-[21px] my-[12px] border-none outline-none" type="text" placeholder='Filter by exercise title' />
          </div>
        </div>

        <div className="list_headerLeft mr-2 cursor-pointer">
          <div className="sort rounded-[5px] flex bg-[#F0F3F9]">
            <p className="px-[21px] py-[12px] mr-32 text-[#5C5589]">Sort by Most Recent</p>
            <img className="pr-[21px]" src={dropdownBig} alt="" />
          </div>
        </div>

      </div>

      <hr className="bg-[#D5D8E4]" />
      <Testimonials currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  );
}