import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarButtons = (props) => {
  return (
    <Link className="
      xl:pt-1
      xl:ml-8 
      hidden xl:flex xl:items-center
      xl:cursor-pointer"
      to={`/${props.description}`}
    >
      <img className="mr-2" src={props.image} alt="" />
      <div className={`font-semibold ${props.selected ? "text-darkPurple" : "text-lightPurple"}`}>
        {props.title}
      </div>
    </Link >
  );
}