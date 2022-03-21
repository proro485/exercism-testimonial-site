import React, { useState } from 'react'
import dropdownBig from '../assets/dropdownBig.svg'

export default function SortDropdown(props) {
  const [dropDown, setDropDown] = useState(false);
  const sortType = {
    0: 'Sort by Most Recent',
    1: 'Sort by Oldest'
  };

  const handleClick = () => {
    setDropDown(!dropDown);
  }

  return (
    <div className={`list_headerLeft cursor-pointer md:w-1/2 lg:w-1/4 xl:w-1/5 relative mx-1 sm:mx-2`}
      onClick={() => setDropDown(!dropDown)}
      onMouseLeave={() => setDropDown(false)}
    >

      <div className={`sort ${dropDown ? "rounded-t-[5px] hover:bg-[#d5e0f7]" : "rounded-[5px]"} flex bg-[#F0F3F9] justify-between`}
        onClick={() => props.setSelected(props.selected)}
      >
        <button className="px-5 py-3 text-[#5C5589] font-poppins">{sortType[props.selected]}</button>
        {
          !dropDown && <img className="pr-5" src={dropdownBig} alt="" />
        }
      </div>
      {
        dropDown && <div className={`sort rounded-b-[5px] flex bg-[#F0F3F9] absolute z-10 justify-between w-full ${dropDown && "hover:bg-[#d5e0f7]"}`}
          onClick={() => props.setSelected((props.selected + 1) % 2)}>

          <button className="px-5 py-3 text-[#5C5589] font-poppins">{sortType[(props.selected + 1) % 2]}</button>

        </div>
      }
    </div>
  );
}
