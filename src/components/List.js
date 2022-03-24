import React, { useState } from 'react';
import search from '../assets/search.svg';
import Testimonials from './Testimonials';
import SortDropdown from './SortDropdown';
import TrackDropdown from './TrackDropdown';
import Pagination from './Pagination';

export default function List(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(0);
  const [exercise, setExercise] = useState('');
  const [pages, setPages] = useState(0);
  const [tracks, setTracks] = useState({});
  const [whichTrack, setWhichTrack] = useState('all');
  const sortType = {
    0: 'newest_first',
    1: 'oldest_first'
  }

  const handleChange = (e) => {
    setExercise(e.target.value);
  }

  return (
    <div className="
      min-h-[70vh]
      mb-11 mx-4 sm:mx-8
      rounded-lg
      shadow-darker"
    >
      <div className="
        m-4
        md:flex md:justify-between"
      >
        <div className="
          mb-3 md:mb-0
          flex items-center"
        >
          <TrackDropdown tracks={tracks} tracksCount={props.tracksCount} whichTrack={whichTrack} setWhichTrack={setWhichTrack} />
          <div className="
            ml-4 mx-1 sm:mx-2
            w-full md:w-4/5
            flex items-center
            rounded-[5px] 
            font-poppins
            text-sm sm:text-base
            text-lightPurple hover:text-darkPurple active:text-darkPurple focus-within:text-darkPurple
            border border-white  hover:border-blue active:border-blue focus-within:border-blue
            bg-faintPurple active:bg-yetAnotherFaintPurple focus-within:bg-white 
            hover:shadow-blueish active:shadow-blueish focus-within:shadow-blueish"
          >
            <img className="
              ml-3 sm:ml-5
              h-5 sm:h-6" src={search} alt=""
            />
            <input className="
              py-3
              mx-2 sm:mx-5
              bg-inherit
              w-full 
              rounded-[5px]
              text-sm sm:text-base
              text-inherit placeholder:text-inherit
              border-none outline-none" value={exercise} onChange={handleChange} type="text" placeholder='Filter by exercise title'
            />
          </div>
        </div>
        <SortDropdown selected={selected} setSelected={setSelected} />
      </div>
      <hr className="
        h-[2px]
      bg-purplePaginationBorder
        border-none"
      />
      <Testimonials currentPage={currentPage} setCurrentPage={setCurrentPage}
        exercise={exercise}
        sortType={sortType[selected]}
        setPages={setPages}
        setTracks={setTracks} setTracksCount={props.setTracksCount}
        whichTrack={whichTrack}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </div>
  );
}