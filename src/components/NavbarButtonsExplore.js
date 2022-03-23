import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarButtons(props) {
  return (
    <div className="flex items-center cursor-pointer p-2 justify-center hover:bg-faintPurple">
      <img className="mr-2 h-5" src={props.image} alt="" />
      <Link to={`${props.description !== "dashboard" ? `/${props.description}` : ""}`} className={`font-poppins font-semibold ${props.selected ? "text-darkPurple" : "text-lightPurple"}`}>
        {props.title}
      </Link>
    </div >
  );
}