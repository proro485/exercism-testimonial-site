import React from 'react';

export default function NavbarButtons(props) {
  return (
    <div className="hidden xl:ml-8 xl:flex xl:items-center xl:cursor-pointer xl:pt-1">
      <img className="mr-2" src={props.image} alt="" />
      <a href={`${props.description}`} className={`font-poppins font-semibold ${props.selected ? "text-darkPurple" : "text-lightPurple"}`}>
        {props.title}
      </a>
    </div >
  );
}