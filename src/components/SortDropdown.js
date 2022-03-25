import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import dropdownBig from '../assets/dropdownBig.svg';

export default function SortDropdown(props) {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = (order) => {
    if (order !== props.params.order) {
      if (dropDown && order === "newest_first") {
        props.setParams({ ...props.params, order: "newest_first" });
        props.setSearchParams({ ...props.params, order: "newest_first" });
      } else if (dropDown) {
        props.setParams({ ...props.params, order: "oldest_first" });
        props.setSearchParams({ ...props.params, order: "oldest_first" });
      }
    }
    setDropDown(!dropDown);
  }

  return (
    <div className="
      mx-1 sm:mx-2
      relative
      md:w-1/2 lg:w-1/4 xl:w-1/5
      font-poppins
      text-sm sm:text-base
      cursor-pointer"
    >
      <button className={`
        w-full
        flex items-center justify-between
        bg-faintPurple hover:bg-purplePaginationBgActive
        ${dropDown ?
          "rounded-t-[5px] hover:bg-yetAnotherFaintPurple" :
          "rounded-[5px]"
        }`
      } onClick={() => handleClick("newest_first")}
      >
        <div className="
          px-5 py-3 
          whitespace-nowrap
          text-lightPurple"
        >
          {!dropDown && (props.params["order"] === "oldest_first" ? "Sort by Oldest" : "Sort by Most Recent")}
          {dropDown && "Sort by Most Recent"}
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
        } onClick={() => handleClick("oldest_first")}
        >
          <div className="
            px-5 py-3 
            text-lightPurple"
          >
            Sort by Oldest
          </div>
        </button>
      }
    </div>
  );
}
