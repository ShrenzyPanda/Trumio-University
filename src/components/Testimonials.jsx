import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { testimonialData } from '../data/testimonialData';
import { settings } from '../data/sliderSettings';



const TestimonialCard = ({
    index,
    description,
    imgURL,
    name,
    designation
}) => {
    return (
      <>
      <blockquote className="ml-6 rounded-lg bg-gray-100 border border-gray-200 p-6 shadow-sm sm:p-8">
      <div className="mb-3 md:h-44 sm:h-52">
      <p className="mt-4 text-gray-700">
          {description}
        </p>
      </div>
        <div className="mt-3">
        <div className="flex items-center gap-4 align-bottom">
          <img
            alt="Photograph"
            src={imgURL}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
            <p className="mt-0.5 text-sm font-medium text-gray-400">{designation}</p>
          </div>
        </div>
        </div>
        
      </blockquote>
      </>
    )
  };


const Testimonials = () => {
  return (
    <>

<section className>
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      What Students Say
    </h2>
    <div className="mt-8">
    <Slider {...settings}>
    {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={`instructor-${index}`} index={index} {...testimonial} />
        ))}
    </Slider>
    
      </div>
  </div>
</section>

        
    </>
  )
};

export default Testimonials;

