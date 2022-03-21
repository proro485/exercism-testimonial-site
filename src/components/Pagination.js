import React from 'react'
import leftPointer from '../assets/leftPointer.svg';
import rightPointer from '../assets/rightPointer.svg';

export default function Pagination(props) {
  const handlePrevious = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  }

  const handleNext = () => {
    if (props.currentPage < props.pages) {
      props.setCurrentPage(props.currentPage + 1);
    }
  }

  const handleDisablePrevious = () => {
    if (props.currentPage == 1) {
      return true;
    }
    return false;
  }

  const handleDisableNext = () => {
    if (props.currentPage == props.pages) {
      return true;
    }
    return false;
  }

  const handlePagination = () => {
    if (props.currentPage == 1) {
      return [1, 2, 3, "...", props.pages];
    } else if (props.currentPage == 2) {
      return [1, 2, 3, 4, "...", props.pages];
    } else if (props.currentPage == 3) {
      return [1, 2, 3, 4, 5, "...", props.pages];
    } else if (props.currentPage == 4) {
      return [1, 2, 3, 4, 5, 6, "...", props.pages];
    } else if (props.currentPage == props.pages) {
      return [1, "...", props.pages - 2, props.pages - 1, props.pages];
    } else if (props.currentPage == props.pages - 1) {
      return [1, "...", props.pages - 3, props.pages - 2, props.pages - 1, props.pages];
    } else if (props.currentPage == props.pages - 2) {
      return [1, "...", props.pages - 4, props.pages - 3, props.pages - 2, props.pages - 1, props.pages];
    } else if (props.currentPage == props.pages - 3) {
      return [1, "...", props.pages - 5, props.pages - 4, props.pages - 3, props.pages - 2, props.pages - 1, props.pages];
    } else {
      return [1, "...", props.currentPage - 2, props.currentPage - 1, props.currentPage, props.currentPage + 1, props.currentPage + 2, "...", props.pages];
    }
  }

  const handlePageClick = (page) => {
    if (page != "...") {
      props.setCurrentPage(parseInt(page));
    }
  }

  return (
    <>
      <hr className="bg-[#D5D8E4]" />
      <div className="pagination lg:flex lg:justify-between mx-8 my-4">
        <div className="previous">
          <button className={`block m-auto lg:flex lg:items-center px-4 py-2 rounded-md text-sm font-poppins
            ${handleDisablePrevious() ? "bg-[#E0E0ED] text-[#76709F]" : "border border-[#D5D8E4] text-[#5C5589] border-b-4 border-x-2"}`}
            onClick={handlePrevious}
          >
            <img src={leftPointer} alt="" className="mr-3 inline" />
            Previous
          </button>
        </div>

        <div className="pagination_buttons flex items-center justify-center my-3 lg:my-0">
          {
            handlePagination().map((item, idx) => {
              return (
                <button key={idx} className={`px-3 md:px-4 py-2 mx-1 sm:mr-3 text-sm font-poppins
                ${item != "..." ? "border rounded cursor-pointer" : "px-[2px]"} 
                ${item != props.currentPage ? "border-[#D5D8E4] text-[#5C5589]" : "border-[#76709F] text-[#130B43] bg-[#E1EBFF]"}`}
                  onClick={() => handlePageClick(item)}
                >
                  {item}
                </button>
              );
            })
          }
        </div>

        <div className="next">
          <button className={`block m-auto md:flex md:items-center px-4 py-2 rounded-md text-sm font-poppins
            ${handleDisableNext() ? "bg-[#E0E0ED] text-[#76709F]" : "border border-[#D5D8E4] text-[#5C5589] border-b-4 border-x-2"}`}
            onClick={handleNext}
          >
            Next
            <img src={rightPointer} alt="" className="ml-3 inline" />
          </button>
        </div >
      </div >
    </>

  );
}
