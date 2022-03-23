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
    <div className="list min-h-[70vh] mb-11 mx-4 sm:mx-8 rounded-lg shadow-darker">
      <div className="list_header md:flex md:justify-between m-4">
        <div className="list_headerRight flex items-center mb-3 md:mb-0">

          <TrackDropdown tracks={tracks} tracksCount={props.tracksCount} whichTrack={whichTrack} setWhichTrack={setWhichTrack} />

          <div className="search rounded-[5px] ml-4 mx-1 sm:mx-2 py-3 w-full sm:1/2 md:w-4/5 flex items-center 
            border border-white bg-faintPurple text-lightPurple font-poppins text-sm sm:text-base
           active:border-blue active:shadow-blueish active:text-darkPurple active:bg-white hover:border-blue hover:shadow-blueish hover:text-darkPurple hover:bg-white focus-within:border-blue focus-within:shadow-blueish focus-within:text-darkPurple focus-within:bg-white"
          >
            <img className="ml-3 sm:ml-5 h-5 sm:h-6" src={search} alt="" />
            <input value={exercise} onChange={handleChange}
              className=" bg-inherit placeholder:text-inherit rounded-[5px] w-full mx-2 sm:mx-5 text-sm sm:text-base
              border-none outline-none
              placeholder:text-lightPurple focus:placeholder:text-darkPurple focus:text-darkPurple hover:placeholder:text-darkPurple hover:text-darkPurple hover:bg-white"
              type="text" placeholder='Filter by exercise title'
            />
          </div>
        </div>

        <SortDropdown selected={selected} setSelected={setSelected} />

      </div>

      <hr className="bg-purplePaginationBorder h-[2px] border-none" />
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