import React, { useEffect, useState } from 'react'
import hexLogo from '../assets/hexLogo.svg'
import dropdown from '../assets/dropdown.svg'

export default function TrackDropdown(props) {
  const [dropDown, setDropDown] = useState(false);
  const [allTracks, setAllTracks] = useState([]);
  let [logo, setLogo] = useState("all");
  const URL = "https://exercism.org/api/v2/tracks";

  const handleChangeTrack = (track) => {
    props.setWhichTrack(track);
    if (track == "all") {
      setLogo("all");
    } else {
      setLogo(allTracks[track].icon);
    }
  }

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
    <div className="trackDropDown relative cursor-pointer font-poppins text-trackDropDownText"
      onClick={() => setDropDown(!dropDown)}
    >
      <button className="flex items-center" >
        <img className="ml-2 mr-2 sm:mr-3 h-12" src={logo === "all" ? hexLogo : `${logo}`} alt="" />
        <img className="mr-4 w-3" src={dropdown} alt="" />
      </button>
      {
        dropDown && <div className="dropdown mt-2 max-h-[290px] w-[300px] sm:w-[380px] overflow-x-visible overflow-y-auto scrollbar-hide
        bg-white absolute z-10 p-2 rounded-lg shadow-medium"
        >
          {
            Object.keys(props.tracks).map((track, idx) => {
              return (
                <button className={`flex w-full justify-between py-2 px-5 sm:px-6 items-center ${props.whichTrack == props.tracks[track] && "bg-faintPurple"} hover:bg-faintPurple focus:bg-faintPurple`}
                  key={idx} onClick={() => handleChangeTrack(props.tracks[track])}
                >
                  <div className="flex items-center">
                    <input type="radio" className="mr-5 sm:mr-6 appearance-none w-4 h-4 sm:w-5 sm:h-5 bg-white border rounded-full border-lightPurple bg-clip-content p-1 checked:bg-testimonialPurpleContent checked:border-lightPurple" checked={props.tracks[track] == props.whichTrack}
                      onChange={() => { }}
                    />
                    <img className="mr-4 h-10" src={track != 0 ? `${allTracks[props.tracks[track]].icon}` : hexLogo} alt="" />
                    <div className="title text-sm sm:text-base">
                      {allTracks[props.tracks[track]].title}
                    </div>
                  </div>
                  <div className={`count text-sm px-3 py-[3px] border rounded-[100px]
                   ${props.tracks[track] == props.whichTrack ? "border-trackDropDownActiveBorder text-darkPurple" : "border-trackDropDownBorder text-lightPurple"}`}
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
