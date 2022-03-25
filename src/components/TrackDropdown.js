import React, { useEffect, useState } from 'react'
import hexLogo from '../assets/hexLogo.svg'
import dropdown from '../assets/dropdown.svg'

export default function TrackDropdown(props) {
  const [dropDown, setDropDown] = useState(false);
  const [allTracks, setAllTracks] = useState([]);
  let [logo, setLogo] = useState(props.whichTrack);
  const URL = "https://exercism.org/api/v2/tracks";

  const handleChangeTrack = (track) => {
    if (track !== props.params.track) {
      props.setParams({ ...props.params, track: track });
      props.setSearchParams({ ...props.params, track: track });
    }

    if (track === "all") {
      setLogo("all");
    } else {
      setLogo(allTracks[track].icon);
    }
  }

  useEffect(() => {
    if (Object.keys(allTracks).length !== 0) {
      if (props.whichTrack === "all") {
        setLogo("all");
      } else {
        setLogo(allTracks[props.whichTrack].icon);
      }
    }
  }, [props.whichTrack, allTracks]);

  useEffect(() => {
  }, [logo]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const { tracks } = await response.json();
      const tracksList = {};
      for (let i = 0; i < tracks.length; i++) {
        tracksList[tracks[i].slug] = { title: tracks[i].title, icon: tracks[i].icon_url };
      }

      tracksList["all"] = { title: "All", icon: hexLogo };
      setAllTracks(tracksList);
    }

    fetchData();

  }, []);

  return (
    <div className="
      relative
      font-poppins text-trackDropDownText
      cursor-pointer" onClick={() => setDropDown(!dropDown)}
    >
      <button className="flex items-center">
        <img className="ml-2 mr-2 sm:mr-3 h-12" src={logo === "all" ? hexLogo : `${logo}`} alt="" />
        <img className="mr-4 w-3" src={dropdown} alt="" />
      </button>
      {
        dropDown && <div className="
          p-2
          mt-2 
          max-h-[290px] w-[300px] sm:w-[380px]
          overflow-x-visible overflow-y-auto scrollbar-hide
        bg-white
          absolute
          z-10
          rounded-lg
          shadow-medium"
        >
          {
            Object.keys(props.tracks).map((track, idx) => {
              return (
                <button className={`
                  py-2 px-5 sm:px-6
                  w-full 
                  flex items-center justify-between
                hover:bg-faintPurple focus:bg-faintPurple
                  ${props.whichTrack === props.tracks[track] && "bg-faintPurple"}
                  `}
                  key={idx} onClick={() => handleChangeTrack(props.tracks[track])}
                >
                  <div className="flex items-center">
                    <input type="radio" className="
                      p-1
                      mr-5 sm:mr-6
                      appearance-none
                      bg-clip-content
                      w-4 h-4 sm:w-5 sm:h-5 
                      bg-white checked:bg-testimonialPurpleContent
                      border border-lightPurple checked:border-lightPurple
                      rounded-full" checked={props.tracks[track] === props.whichTrack} onChange={() => { }}
                    />
                    <img className="mr-4 h-10" src={track !== 0 ? `${allTracks[props.tracks[track]].icon}` : hexLogo} alt="" />
                    <div className="text-sm sm:text-base font-medium">
                      {allTracks[props.tracks[track]].title}
                    </div>
                  </div>
                  <div className={`
                    px-3 py-[3px]
                    text-sm font-medium
                    border
                    rounded-[100px]
                   ${props.tracks[track] === props.whichTrack ?
                      "border-trackDropDownActiveBorder text-darkPurple" :
                      "border-trackDropDownBorder text-lightPurple"
                    }`
                  }
                  >
                    {props.tracksCount[props.tracks[track]]}
                  </div>
                </button>
              );
            })
          }
        </div>
      }
    </div>
  );
}
