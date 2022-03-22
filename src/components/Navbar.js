import React from 'react';
import dashboard from '../assets/dashboard.svg';
import logo from '../assets/logo.svg';
import smallLogo from '../assets/smallLogo.svg'
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
import Explore from './Explore';

export default function Navbar() {
  return (
    <nav className='nav h-16 flex  items-center border-lighterPurple border-b w-full'>
      <div className="px-5 sm:px-10 flex items-center justify-between w-full">

        <div className="nav_left flex items-center">
          <div className='hidden md:flex' >
            <a href="https://exercism.org">
              <img src={logo} alt="exercism logo" />
            </a>
          </div>
          <div className='md:hidden'>
            <a href="https://exercism.org">
              <img src={smallLogo} alt="exercism logo" className='h-8' />
            </a>
          </div>
          <NavbarButtons title="Dashboard" image={dashboard} selected={true} description="dashboard" />
          <NavbarButtons title="Tracks" image={tracks} selected={false} description="tracks" />
          <NavbarButtons title="Mentoring" image={mentoring} selected={false} description="mentoring" />
          <NavbarButtons title="Contribute" image={contribute} selected={false} description="contribute" />
        </div>

        <div className='flex items-center'>
          <Explore />
          <div className="hidden xl:flex xl:items-center">
            <a href="/chatBubble" className="xl:mr-9">
              <img className="h-6 cursor-pointer" src={chatBubble} alt="" />
            </a>
            <a href="/hexagon" className="xl:mr-6">
              <img className="h-6 cursor-pointer" src={hexagon} alt="" />
            </a>
            <a href="/notifications" className="xl:mr-6">
              <img className="h-17 pt-[14px] cursor-pointer" src={notifications} alt="" />
            </a>
            <a href="/badge" className="xl:mr-10">
              <img className="h-17 pb-[7px] cursor-pointer" src={badge} alt="" />
            </a>
          </div>
          <a href="/avatar" className="mr-2 sm:mr-4">
            <img className="h-17 cursor-pointer" src={avatar} alt="" />
          </a>
          <a href="/menu" className="">
            <img className="h-17 cursor-pointer" src={menu} alt="" />
          </a>
        </div>

      </div>
    </nav>
  );
}