import React from "react";


const Footer = () => {
  return (
    <footer
      className="bg-[#FDF8EE] text-center text-neutral-600 lg:text-left">

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Trumio University
            </h6>
            <p>
            Trumio University is a premier educational platform empowering individuals through cutting-edge courses. With a commitment to excellence, it offers a diverse range of skill-enhancing programs, equipping students with practical knowledge and fostering continuous upskilling.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 "
              >About Us</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 "
              >How to Work?</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 "
              >Popular Course</a>
            </p>
            <p>
              <a href="#" className="text-neutral-600"
              >Service</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Courses
            </h6>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Categories</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Offline Course</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Video Course</a>
            </p>
          </div>
          {/* <!-- Support section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Support
            </h6>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >FAQ</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Help Center</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Career</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >Privacy</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact Info
            </h6>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >+91 75623 86675</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >info@univ.com</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600"
              >4808 Park Street, London</a>
            </p>
            
          </div>
          
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-[#ffecc7bc] p-3 text-center ">
        <span className="font-semibold">Trumio University </span> 
        All Rights Reserved, 2023
      </div>
    </footer>
  );
}


export default Footer;