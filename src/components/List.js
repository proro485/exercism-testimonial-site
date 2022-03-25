import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import search from '../assets/search.svg';
import Testimonials from './Testimonials';
import SortDropdown from './SortDropdown';
import TrackDropdown from './TrackDropdown';
import Pagination from './Pagination';

export default function List(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({});
  const [pages, setPages] = useState(0);
  const [tracks, setTracks] = useState({});

  useEffect(() => {
    const page = searchParams.get("page") !== null ? parseInt(searchParams.get("page")) : 1;
    const order = searchParams.get("order") !== null ? searchParams.get("order") : "newest_first";
    const track = searchParams.get("track") !== null ? searchParams.get("track") : "all";
    const exercise = searchParams.get("exercise") !== null ? searchParams.get("exercise") : "";

    setParams({ page: page, order: order, track: track, exercise: exercise });
  }, []);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setParams({ ...params, exercise: e.target.value.trim() });
      setSearchParams({ ...params, exercise: e.target.value.trim() });
    } else {
      const newParams = { ...params };
      delete newParams.exercise;
      setParams({ ...newParams });
      setSearchParams({ ...newParams });
    }
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
          <TrackDropdown
            tracks={tracks}
            tracksCount={props.tracksCount}
            searchParams={searchParams} setSearchParams={setSearchParams}
            params={params} setParams={setParams}
            whichTrack={params["track"] !== undefined ? params["track"] : "all"}
          />
          <div className="
            ml-4 mx-1 sm:mx-2
            w-full md:w-4/5
            flex items-center
            rounded-[5px] 
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
              border-none outline-none"
              value={params["exercise"] !== undefined ? params["exercise"] : ""}
              onChange={handleChange} type="text" placeholder='Filter by exercise title'
            />
          </div>
        </div>
        <SortDropdown
          searchParams={searchParams} setSearchParams={setSearchParams}
          params={params} setParams={setParams}
        />
      </div>
      <hr className="
        h-[2px]
      bg-purplePaginationBorder
        border-none"
      />
      <Testimonials
        params={params}
        order={params["order"] !== undefined ? params["order"] : "newest_first"}
        page={params["page"] !== undefined ? params["page"] : 1}
        exercise={params["exercise"] !== undefined ? params["exercise"] : ""}
        track={params["track"] !== undefined ? params["track"] : "all"}
        setPages={setPages}
        setTracks={setTracks}
        setTracksCount={props.setTracksCount}
      />
      <Pagination
        pages={pages}
        currentPage={params["page"] !== undefined ? params["page"] : 1}
        params={params} setParams={setParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}
