import React, { useEffect, useState } from 'react'
import hexLogo from '../assets/hexLogo.svg'
import dropdown from '../assets/dropdown.svg'
import axios from 'axios';

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
      const { data: { tracks } } = await axios.get(URL);
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
    <div className="trackDropDown relative cursor-pointer font-poppins text-[#3D3B45]"
      onClick={() => setDropDown(!dropDown)} onMouseLeave={() => setDropDown(false)}
    >
      <div className="flex" >
        <img className="ml-2 mr-3 h-12" src={logo === "all" ? hexLogo : `${logo}`} alt="" />
        <img className="mr-4 w-3" src={dropdown} alt="" />
      </div>
      {
        dropDown && <div className="dropdown max-h-[32vh] w-[380px] overflow-x-visible overflow-y-auto 
        bg-white absolute z-10 p-2 rounded-lg shadow-[0_4px_42px_0px_rgba(79,114,205,0.15)]"
        >
          {
            Object.keys(props.tracks).map((track, idx) => {
              return (
                <div className={`flex justify-between py-2 px-6 items-center ${props.whichTrack == props.tracks[track] && "bg-[#F0F3F9]"}`}
                  key={idx} onClick={() => handleChangeTrack(props.tracks[track])}
                >
                  <div className="flex items-center">
                    <input type="radio" className="mr-6 cursor-pointer" checked={props.tracks[track] == props.whichTrack}
                      onChange={() => { }}
                    />
                    <img className="mr-4 h-10" src={track != 0 ? `${allTracks[props.tracks[track]].icon}` : hexLogo} alt="" />
                    <div className="title">
                      {allTracks[props.tracks[track]].title}
                    </div>
                  </div>
                  <div className={`count text-sm px-3 py-[3px] border rounded-[100px]
                   ${props.tracks[track] == props.whichTrack ? "border-[#6A6781] text-[#130B43]" : "border-[#A9A6BD] text-[#5C5589]"}`}
                  >
                    {props.tracksCount[props.tracks[track]]}
                  </div>
                </div>
              );
            })
          }
        </div>
      }
    </div >
  );
}
