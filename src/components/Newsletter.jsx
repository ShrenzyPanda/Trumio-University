import React from "react";

const Newsletter = () => {
  return (
    <div className="mb-32 p-12 bg-cover bg-newsletterBG">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mt-8 mb-4 text-3xl tracking-tight font-bold text-white sm:text-4xl">Subscribe to our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center flex-auto w-1/2 mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                      <input className="rounded-l-full p-3 pl-10 w-4/5 text-sm text-gray-900 bg-gray-50 " placeholder="Email Address" type="email" id="email" required=""/>
                      <button type="submit" className="rounded-r-full py-3 px-5 w-1/5 text-sm font-medium text-center bg-[#FF7426] ">Send</button>

              </div>
          </form>
      </div>
  </div>
    </div>
  )
}

export default Newsletter;
