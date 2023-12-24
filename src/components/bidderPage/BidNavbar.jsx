import React from 'react';
import { msg,search,bell,trumioLogo } from '../../assets/bidderPage';
import { user } from '../../data/currentUser';

const BidNavbar = () => {
  return (
    <>
        <nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">

    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">

      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>


    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>

      <a
        className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="#">
        <img
          src={trumioLogo}
          className='h-[30px]'
          alt="Trumio Logo"
          loading="lazy" />
      </a>

      <ul
        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
   
          <a
            className="px-2 text-neutral-500  focus:text-[#0578FB] transition duration-200 hover:text-[#0578FB] font-medium hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none "
            href="#"
            data-te-nav-link-ref
            >Dashboard</a>
        </li>

        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="px-2 text-neutral-500 focus:text-[#0578FB] transition duration-200 hover:text-[#0578FB] font-medium hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none "
            href="#"
            data-te-nav-link-ref
            >Marketplace</a>
        </li>

        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="px-2 text-neutral-500 focus:text-[#0578FB] transition duration-200 hover:text-[#0578FB] font-medium hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none "
            href="#"
            data-te-nav-link-ref
            >Project</a>
        </li>

        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="px-2 text-neutral-500 focus:text-[#0578FB] transition duration-200 hover:text-[#0578FB] font-medium hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none "
            href="#"
            data-te-nav-link-ref
            >My Team</a>
        </li>
      </ul>
    </div>


    <div className="relative flex items-center">

      <a
        className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href="#">
        <span className="[&>svg]:w-5">
          <img className='h-10 w-10' src={search} alt="logo"></img>
        </span>
      </a>
      <a
        className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href="#">
        <span className="[&>svg]:w-5">
          <img className='h-10 w-10' src={bell} alt="logo"></img>
        </span>
      </a>
      <a
        className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href="#">
        <span className="[&>svg]:w-5">
          <img className='h-6 w-6' src={msg} alt="logo"></img>
        </span>
      </a>





      <div
        className="relative"
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">
        
        <a
          className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          <span>
          <div className='p-2 flex flex-col'>
          <h3 className='font-medium text-lg'>{user.name}</h3>
          <h6 className="font-normal text-gray-500 text-sm">Talent</h6>
          </div>
          </span>
          <img
            src={user.dp}
            className="rounded-full h-[25px] w-[25px]"
            alt=""
            loading="lazy" />
        </a>

        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default BidNavbar;