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
        rounded
        px-4 py-2 
        mr-2 sm:mr-4 
        cursor-pointer
        text-darkPurple text-[15px]
        border border-darkPurple 
        flex xl:hidden items-center 
        shadow-light hover:shadow-dark" onClick={handleClick}
      >
        <img src={hamburger} alt="" />
        <button className="
          ml-3
          font-poppins font-semibold"
        >
          Explore
        </button>

      </div>
      {
        dropDown && <div className="
          absolute right-11 sm:right-10 left-auto
          pb-4
          mt-2   
          bg-white 
          rounded 
          shadow-medium 
          z-20"
        >
          <div className="
            px-4 
            flex flex-wrap items-center"
          >
            <div className="
              space-x-2
              flex items-center"
            >
              <Link to="/chatBubble">
                <img className="
                  h-6 sm:h-7 w-auto
                  ml-1 mr-3
                  cursor-pointer" src={chatBubble} alt="Chat Icon"
                />
              </Link>
              <Link to="/hexagon">
                <img className="
                  h-6 sm:h-7
                  w-auto 
                  cursor-pointer" src={hexagon} alt="Hexagon Icon"
                />
              </Link>
              <Link to="/notifications">
                <img className="
                  h-12 sm:h-16 w-auto
                  mt-2 sm:mt-3
                  cursor-pointer" src={notifications} alt="Notifications Icon"
                />
              </Link>
              <Link to="/badge">
                <img className="
                  h-8 sm:h-10
                  mb-1 sm:mb-2
                  cursor-pointer" src={badge} alt="Badge Icon"
                />
              </Link>
            </div>
          </div>
          <hr className="
            h-[2px]
            border-none 
            bg-lighterPurple"
          />
          <div className="
            mt-3"
          >
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
