import React, { useState } from 'react';
import search from '../assets/search.svg';
import hexLogo from '../assets/hexLogo.svg';
import dropdown from '../assets/dropdown.svg';
import Testimonials from './Testimonials';
import SortDropdown from './SortDropdown';
import Pagination from './Pagination';

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(0);
  const [exercise, setExercise] = useState('');
  const [pages, setPages] = useState(0);
  const sortType = {
    0: 'newest_first',
    1: 'oldest_first'
  }

  const handleChange = (e) => {
    setExercise(e.target.value);
  }

  return (
    <div className="list min-h-[70vh] mb-11 mx-8 shadow-[0_4px_42px_0px_rgba(79,114,205,0.15)] rounded-lg" >
      <div className="list_header flex justify-between m-4">

        <div className="list_headerRight flex items-center">
          <img className="ml-2 mr-3" src={hexLogo} alt="" />
          <img className="mr-4 cursor-pointer w-3" src={dropdown} alt="" />
          <div className="search rounded-[5px] w-[416px] flex items-center bg-[#F0F3F9] text-[#5C5589] font-poppins">
            <img className="ml-5 h-6" src={search} alt="" />
            <input value={exercise} onChange={handleChange}
              className="bg-[#F0F3F9] rounded-[5px] w-full mx-[21px] my-[12px] border-none outline-none"
              type="text" placeholder='Filter by exercise title'
            />
          </div>
        </div>

        <SortDropdown selected={selected} setSelected={setSelected} dropDown={dropDown} setDropDown={setDropDown} />

      </div>

      <hr className="bg-[#D5D8E4] h-[2px]" />
      <Testimonials currentPage={currentPage} setCurrentPage={setCurrentPage} exercise={exercise} sortType={sortType[selected]} setPages={setPages} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />

    </div>
  );
}