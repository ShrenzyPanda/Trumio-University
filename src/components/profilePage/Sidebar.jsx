import React from "react";
import {
  dashboard,
  books,
  calendar,
  help,
  logout,
  projects,
  settings,
} from "../../assets/profileIcons";

const Sidebar = () => {
  return (
    <div className="xl:rounded-r transform flex flex-col sticky top-20 font-medium justify-between items-center h-[90vh] pb-4 w-full sm:w-64 bg-[#FBEFCE]  text-gray-500">
      <div className="mt-6  flex flex-col justify-start items-center pt-3  w-full border-gray-600  space-y-2 pb-5 ">
        <button className="flex justify-start items-center space-x-6 w-full pl-8 py-2 focus:outline-none  focus:text-indigo-400  rounded hover:bg-[#fae6af]">
          <img src={dashboard} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Dashboard</p>
        </button>
        <button className="flex justify-start items-center w-full pl-8 py-2  space-x-6 focus:outline-none  focus:text-indigo-400   rounded hover:bg-[#fae6af]">
          <img src={projects} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Projects</p>
        </button>
        <button className="flex justify-start items-center w-full pl-8 py-2  space-x-6 focus:outline-none  focus:text-indigo-400   rounded hover:bg-[#fae6af]">
          <img src={books} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Courses</p>
        </button>
        <button className="flex justify-start items-center w-full pl-8 py-2  space-x-6 focus:outline-none  focus:text-indigo-400   rounded hover:bg-[#fae6af]">
          <img src={calendar} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Live Events</p>
        </button>
        <button className="flex justify-start items-center w-full pl-8 py-2  space-x-6 focus:outline-none  focus:text-indigo-400   rounded hover:bg-[#fae6af]">
          <img src={settings} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Settings</p>
        </button>
      </div>

      <div className=" flex flex-col justify-start items-center  pl-8 w-full border-gray-600  space-y-3 pb-5 ">
        <button className="flex justify-start items-center w-full  space-x-6 focus:outline-none  focus:text-indigo-400   rounded ">
          <img src={help} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Help</p>
        </button>
        <button className="flex justify-start items-center w-full  space-x-6 focus:outline-none  focus:text-indigo-400   rounded ">
          <img src={logout} alt="" height="24px" width="24px" />
          <p className="text-base leading-4 ">Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
