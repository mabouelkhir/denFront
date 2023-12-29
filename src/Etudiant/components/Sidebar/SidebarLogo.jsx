// SidebarLogo.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTimes, faTooth } from "@fortawesome/free-solid-svg-icons";

function SidebarLogo({ ...props }) {
  return (
    <div className="relative flex flex-row font-semibold text-3xl md:items-center md:mx-auto text-green-700 mb-5 p-4 justify-between">
      <Link to="/">
        <FontAwesomeIcon icon={faTooth}></FontAwesomeIcon> Dentaire
      </Link>
      <button
        onClick={props.toggle}
        className="border border-emerald-300 text-xl font-medium py-2 px-4 block md:hidden absolute right-1 top-3"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default SidebarLogo;
