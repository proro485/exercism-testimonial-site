import React from 'react'
import leftPointer from '../assets/leftPointer.svg';
import rightPointer from '../assets/rightPointer.svg';

export default function Pagination(props) {
  const handlePrevious = () => {
    if (props.currentPage > 1) {
      window.scrollTo(0, 0);
      props.setCurrentPage(props.currentPage - 1);
    }
  }

  const handleNext = () => {
    if (props.currentPage < props.pages) {
      window.scrollTo(0, 0);
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
    if (props.pages == 1) {
      return [1];
    } else if (props.pages == 2) {
      return [1, 2];
    } else if (props.pages == 3) {
      return [1, 2, 3];
    } else if (props.pages == 4) {
      return [1, 2, 3, 4];
    } else if (props.pages == 5) {
      return [1, 2, 3, 4, 5];
    } else if (props.pages == 6) {
      return [1, 2, 3, 4, 5, 6];
    }

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
      window.scrollTo(0, 0);
      props.setCurrentPage(parseInt(page));
    }
  }

  return (
    <div className="font-poppins">
      <hr className="
        h-px
      bg-purplePaginationBorder
        border-none"
      />
      <div className="
        mx-8 my-4
        lg:flex lg:justify-between"
      >
        <div>
          <button className={`
            px-4 py-2
            m-auto
            block lg:flex lg:items-center
            rounded-md 
            text-sm font-medium 
            ${handleDisablePrevious() ?
              "bg-purplePaginationBg text-purplePaginationText" :
              `border border-b-4 border-x-2 border-purplePaginationBorder 
              text-lightPurple active:text-darkPurple
              hover:bg-faintPurple focus:bg-faintPurple active:bg-yetAnotherFaintPurple`
            }`
          }
            onClick={handlePrevious} disabled={handleDisablePrevious()}
          >
            <img src={leftPointer} alt="" className="mr-3 inline" />
            Previous
          </button>
        </div>

        <div className="
          sm:space-x-3
          my-3 lg:my-0
          flex items-center justify-center"
        >
          {
            handlePagination().map((item, idx) => {
              return (
                item !== "..." ?
                  <button key={idx} className={`
                    px-3 md:px-4 py-2
                    mx-1 sm:mx-0
                    text-sm font-medium
                    border
                    rounded
                    cursor-pointer
                    hover:bg-purplePaginationBgActive focus:bg-purplePaginationBgActive
                    hover:text-darkPurple focus:text-darkPurple
                    ${item != props.currentPage ?
                      "border-purplePaginationBorder text-lightPurple" :
                      "border-purplePaginationText text-darkPurple bg-purplePaginationBgActive"
                    }`
                  }
                    onClick={() => handlePageClick(item)}
                  >
                    {item}
                  </button> :
                  <span key={idx} className="mx-1 sm:mr-3 text-sm font-poppins">{item}</span>
              );
            })
          }
        </div>

        <div>
          <button className={`
            px-4 py-2
            m-auto
            block lg:flex lg:items-center
            rounded-md 
            text-sm font-medium 
            ${handleDisableNext() ?
              "bg-purplePaginationBg text-purplePaginationText" :
              `border border-b-4 border-x-2 border-purplePaginationBorder 
              text-lightPurple active:text-darkPurple
              hover:bg-faintPurple focus:bg-faintPurple active:bg-yetAnotherFaintPurple`
            }`
          }
            onClick={handleNext} disabled={handleDisableNext()}
          >
            Next
            <img src={rightPointer} alt="" className="ml-3 inline" />
          </button>
        </div >
      </div >
    </div>

  );
}
