import React from "react";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


export const Navbar2 = () => {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 text-gray-800 backdrop-blur-md bg-[#fff8eb71] shadow-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Trumio University
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 items-center rtl:space-x-reverse">
            <NotificationsActiveIcon />
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#644a71] md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#644a71] md:p-0 "
                  aria-current="page"
                >
                  Trumio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
