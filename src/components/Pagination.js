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
      <div className="pagination flex justify-between mx-8 my-4">
        <div className="previous">
          <button className={`flex items-center px-4 py-2 rounded-md text-sm font-poppins
            ${handleDisablePrevious() ? "bg-[#E0E0ED] text-[#76709F]" : "border border-[#D5D8E4] text-[#5C5589] border-b-4 border-x-2"}`}
            onClick={handlePrevious}
          >
            <img src={leftPointer} alt="" className="mr-3" />
            Previous
          </button>
        </div>

        <div className="pagination_buttons flex items-center">
          {
            handlePagination().map((item, idx) => {
              return (
                <button key={idx} className={`px-4 py-2 mr-3 text-sm font-poppins
                ${item != "..." && "border rounded cursor-pointer"} 
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
          <button className={`flex items-center px-4 py-2 rounded-md text-sm font-poppins
            ${handleDisableNext() ? "bg-[#E0E0ED] text-[#76709F]" : "border border-[#D5D8E4] text-[#5C5589] border-b-4 border-x-2"}`}
            onClick={handleNext}
          >
            Next
            <img src={rightPointer} alt="" className="ml-3" />
          </button>
        </div >
      </div >
    </>

  );
}
