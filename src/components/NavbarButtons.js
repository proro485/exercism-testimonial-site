import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarButtons(props) {
  return (
    <div className="hidden xl:ml-8 xl:flex xl:items-center xl:cursor-pointer xl:pt-1">
      <img className="mr-2" src={props.image} alt="" />
      <Link to={`${props.description !== "dashboard" ? `/${props.description}` : ""}`} className={`font-poppins font-semibold ${props.selected ? "text-darkPurple" : "text-lightPurple"}`}>
        {props.title}
      </Link>
    </div >
  );
}