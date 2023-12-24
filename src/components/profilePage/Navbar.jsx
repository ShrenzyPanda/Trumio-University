import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="sticky z-10 top-0 flex w-full flex-wrap items-center justify-between  bg-[#FBEFCE] py-2 pr-8 pl-8
  text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:py-5"
      >
        <div className="flex w-[50%] ">
          <div className="flex w-[50%] flex-wrap items-center  pl-3">
            <div>
              <a
                className="ml-2 my-1 flex items-center text-black hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                href="/"
              >
                <span className="font-bold  text-xl">Trumio University</span>
              </a>
            </div>
          </div>
          <div className="flex w-[35%] ">
            <input
              type="search"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-full
      border border-solid border-neutral-300 bg-[#FDF8EE] bg-clip-padding px-3 py-[0.25rem] 
      text-base font-normal leading-[1.6] text-neutral-700 outline-none 
      transition duration-200 ease-in-out 
      focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] 
      focus:outline-none motion-reduce:transition-none 
      "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 "
              id="basic-addon2"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <div
            className="relative"
            data-te-dropdown-ref
            data-te-dropdown-alignment="end"
          >
            <a
              className="hidden-arrow mr-4 flex items-center text-secondary-500 transition duration-200 hover:text-secondary-400 hover:ease-in-out focus:text-secondary-400 disabled:text-black/30 motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <span className="[&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <span className="absolute -mt-4 ml-2.5 rounded-full bg-red-600 px-[0.25em] py-[0.04em] text-[0.8rem] font-bold leading-none text-white">
                1
              </span>
            </a>
          </div>

          <div
            className="relative"
            data-te-dropdown-ref
            data-te-dropdown-alignment="end"
          >
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: "32px", width: "32px" }}
                alt=""
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
