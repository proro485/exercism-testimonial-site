import React from 'react';

export default function NavbarButtons(props) {
  return (
    <div className="flex items-center cursor-pointer p-2 justify-center">
      <img className="mr-2 h-5" src={props.image} alt="" />
      <a href={`${props.description}`} className={`font-poppins font-semibold ${props.selected ? "text-[#130B43]" : "text-[#5C5589]"}`}>
        {props.title}
      </a>
    </div >
  );
}