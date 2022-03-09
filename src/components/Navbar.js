import React from 'react';
import dashboard from '../assets/dashboard.svg';
import logo from '../assets/logo.svg';
import tracks from '../assets/tracks.svg';
import chatBubble from '../assets/chatBubble.svg';
import contribute from '../assets/contribute.svg';
import mentoring from '../assets/mentoring.svg';
import notifications from '../assets/notifications.svg';
import hexagon from '../assets/hexagon.svg';
import badge from '../assets/badge.svg';
import avatar from '../assets/avatar.svg';
import menu from '../assets/menu.svg';
import NavbarButtons from './NavbarButtons';

export default function Navbar() {
  return (
    <nav className='nav h-16 flex  items-center border-[#C8D5EF] border-b w-full'>
      <div className="px-10 flex items-center justify-between w-full">

        <div className="nav_left flex items-center">
          <a href="https://exercism.org">
            <img src={logo} alt="exercism logo" />
          </a>
          <NavbarButtons title="Dashboard" image={dashboard} selected={true} />
          <NavbarButtons title="Tracks" image={tracks} selected={false} />
          <NavbarButtons title="Mentoring" image={mentoring} selected={false} />
          <NavbarButtons title="Contribute" image={contribute} selected={false} />
        </div>

        <div className="nav_right flex items-center">
          <div className="chatBubble mr-9">
            <img className="h-6 cursor-pointer" src={chatBubble} alt="" />
          </div>
          <div className="hexagon mr-6">
            <img className="h-6 cursor-pointer" src={hexagon} alt="" />
          </div>
          <div className="notification mr-6">
            <img className="h-17 pt-[14px] cursor-pointer" src={notifications} alt="" />
          </div>
          <div className="badge mr-10">
            <img className="h-17 pb-[7px] cursor-pointer" src={badge} alt="" />
          </div>
          <div className="avatarm mr-4">
            <img className="h-17 cursor-pointer" src={avatar} alt="" />
          </div>
          <div className="menu">
            <img className="h-17 cursor-pointer" src={menu} alt="" />
          </div>
        </div>

      </div>
    </nav>
  );
}