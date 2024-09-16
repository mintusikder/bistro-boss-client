import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to="/contact"
          className="hover:text-yellow-400 active:text-yellow-400 focus:text-yellow-400"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto text-white fixed z-10 bg-opacity-60 bg-black w-full">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Mobile Hamburger Menu */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]"
            >
              {nav}
            </ul>
          </div>

          {/* Logo / Title */}
          <a
            href="#"
            className="btn btn-ghost normal-case text-xl flex flex-col justify-between h-full items-start leading-tight"
          >
            <span className="font-bold">BISTRO BOSS</span>
            <span className="font-light text-sm">Restaurant</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
          <a className="btn btn-primary ml-4 hover:bg-yellow-500 hover:border-yellow-500">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
