import React from 'react';

export default function NavbarButtons(props) {
  return (
    <div className="m ml-8 flex items-center cursor-pointer pt-1">
      <img className="mr-2" src={props.image} alt="" />
      <p className={`font-poppins font-semibold ${props.selected ? "text-[#130B43]" : "text-[#5C5589]"}`}>
        {props.title}
      </p>
    </div >
  );
}