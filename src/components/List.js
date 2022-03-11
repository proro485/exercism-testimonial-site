import React, { useState } from 'react';
import search from '../assets/search.svg';
import Testimonials from './Testimonials';
import SortDropdown from './SortDropdown';
import TrackDropdown from './TrackDropdown';
import Pagination from './Pagination';

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(0);
  const [exercise, setExercise] = useState('');
  const [pages, setPages] = useState(0);
  const [tracks, setTracks] = useState({});
  const [tracksCount, setTracksCount] = useState({});
  const [whichTrack, setWhichTrack] = useState('all');
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
          <TrackDropdown tracks={tracks} tracksCount={tracksCount} whichTrack={whichTrack} setWhichTrack={setWhichTrack} />
          <div className="search rounded-[5px] w-[416px] flex items-center bg-[#F0F3F9] text-[#5C5589] font-poppins">
            <img className="ml-5 h-6" src={search} alt="" />
            <input value={exercise} onChange={handleChange}
              className="bg-[#F0F3F9] rounded-[5px] w-full mx-[21px] my-[12px] border-none outline-none"
              type="text" placeholder='Filter by exercise title'
            />
          </div>
        </div>

        <SortDropdown selected={selected} setSelected={setSelected} />

      </div>

      <hr className="bg-[#D5D8E4] h-[2px]" />
      <Testimonials currentPage={currentPage} setCurrentPage={setCurrentPage}
        exercise={exercise}
        sortType={sortType[selected]}
        setPages={setPages}
        setTracks={setTracks} setTracksCount={setTracksCount}
        whichTrack={whichTrack}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />

    </div>
  );
}