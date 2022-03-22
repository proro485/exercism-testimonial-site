import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarButtonsExplore from './NavbarButtonsExplore';
import dashboard from '../assets/dashboard.svg';
import tracks from '../assets/tracks.svg';
import mentoring from '../assets/mentoring.svg';
import contribute from '../assets/contribute.svg';
import hamburger from '../assets/hamburger.svg';
import chatBubble from '../assets/chatBubble.svg';
import hexagon from '../assets/hexagon.svg';
import notifications from '../assets/notifications.svg';
import badge from '../assets/badge.svg';

export default function Explore() {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  }

  return (
    <div>
      <div className="
        flex xl:hidden items-center 
        cursor-pointer
        mr-2 sm:mr-4 
        px-4 py-2 
        text-darkPurple text-[15px] 
        border border-darkPurple 
        rounded
        shadow-medium
      "
        onClick={handleClick}
      >
        <img src={hamburger} alt="" />
        <button className="font-poppins font-semibold ml-3">Explore</button>
      </div>
      {
        dropDown && <div className="absolute mt-2 pb-4 right-11 sm:right-10 left-auto bg-white rounded shadow-medium z-20">
          <div className="flex flex-wrap items-center px-4 ">
            <div className="space-x-2 flex items-center">
              <Link to="/chatBubble">
                <img className="h-6 w-auto sm:h-7 ml-1 mr-3 cursor-pointer" src={chatBubble} alt="" />
              </Link>
              <Link to="/hexagon">
                <img className="h-6 w-auto sm:h-7 cursor-pointer" src={hexagon} alt="" />
              </Link>
              <Link to="/notifications">
                <img className="h-12 w-auto sm:h-16 mt-[10px] sm:mt-[12px] cursor-pointer" src={notifications} alt="" />
              </Link>
              <Link to="/badge">
                <img className="h-8 sm:h-10 mb-[5px] sm:mb-[7px] cursor-pointer" src={badge} alt="" />
              </Link>
            </div>
          </div>
          <hr className="h-[2px] border-none bg-lighterPurple" />
          <div className="mt-3">
            <NavbarButtonsExplore title="Dashboard" image={dashboard} selected={true} description="dashboard" />
            <NavbarButtonsExplore title="Tracks" image={tracks} selected={false} description="tracks" />
            <NavbarButtonsExplore title="Mentoring" image={mentoring} selected={false} description="mentoring" />
            <NavbarButtonsExplore title="Contribute" image={contribute} selected={false} description="contribute" />
          </div>
        </div>
      }
    </div >
  );
}
