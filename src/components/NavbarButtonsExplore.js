import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarButtons(props) {
  return (
    <Link className="
      p-2
      flex items-center justify-center
    hover:bg-faintPurple
      cursor-pointer"
      to={`${props.description !== "dashboard" ? `/${props.description}` : "/"}`}
    >
      <img className="mr-2 h-5" src={props.image} alt="" />
      <div className={`font-poppins font-semibold ${props.selected ? "text-darkPurple" : "text-lightPurple"}`}>
        {props.title}
      </div>
    </Link>
  );
}