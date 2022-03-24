import React, { useState } from 'react';
import dropdownBig from '../assets/dropdownBig.svg';

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
    <div className="
      mx-1 sm:mx-2
      relative
      md:w-1/2 lg:w-1/4 xl:w-1/5
      font-poppins
      text-sm sm:text-base
      cursor-pointer" onClick={() => setDropDown(!dropDown)}
    >
      <button className={`
      hover:bg-purplePaginationBgActive
        w-full
        flex items-center justify-between
      bg-faintPurple
        ${dropDown ?
          "rounded-t-[5px] hover:bg-yetAnotherFaintPurple" :
          "rounded-[5px]"
        }`
      } onClick={() => props.setSelected(props.selected)}
      >
        <div className="
          px-5 py-3 
          text-lightPurple"
        >
          {sortType[props.selected]}
        </div>
        {
          !dropDown && <img className="pr-5" src={dropdownBig} alt="" />
        }
      </button>
      {
        dropDown && <button className={`
          absolute 
          flex justify-between
          w-full 
          rounded-b-[5px]
          bg-faintPurple
          z-10 
          ${dropDown && "hover:bg-yetAnotherFaintPurple"}`
        } onClick={() => props.setSelected((props.selected + 1) % 2)}
        >
          <div className="
            px-5 py-3 
            text-lightPurple"
          >
            {sortType[(props.selected + 1) % 2]}
          </div>
        </button>
      }
    </div>
  );
}
