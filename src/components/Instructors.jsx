import React from 'react';

import { instructorData } from '../data/instructorData';
import { instagram,linkedin } from '../assets';


const InstructorCard = ({
    index,
    imgURL,
    name,
    designation,
    description,
    department
}) => {
  return (
    <div
    className="mx-3 mt-8 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
      <img
        className="rounded-t-lg"
        src={imgURL} 
        alt="Photograph" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        {name}
      </h5>
      <h6 className='mb-2 text-md leading-tight text-gray-500 '>
      {designation}
      </h6>
      <p className="mb-4 text-base text-neutral-400 ">
        {description}
      </p>
    </div>
    <div className='mt-auto mb-3 flex flex-row justify-around'>
    <div className='pt-2 flex flex-col text-md font-medium text-[#FF7426]'>
        {department}
    </div>
    <div className='flex flex-row'>
    <a className='flex' href='#'>
    <img 
        height="40px"
        width="40px"
        className='mr-4'
        src={instagram}
        alt="Instagram Logo"/>
    </a>
    <a className='flex' href='#'>
    <img 
        height="40px"
        width="40px"
        className=''
        src={linkedin}
        alt="Instagram Logo"/>
    </a>
        
    </div>

    </div>
  </div>
  )
}


const Instructors = () => {
  return (
    <>
    <div className='ml-[40%] w-half mb-5 flex flex-col mt-10'>
        <h1 className='mb-2 text-5xl font-bold'>Our Instructors</h1>
        <h3 className='ml-[5%] text-gray-400'>Meet our pool of qualified instructors</h3>
    </div>
    <div className="mr-8 ml-8 mb-8 grid-cols-1 sm:grid md:grid-cols-3 ">
    {instructorData.map((instructor, index) => (
          <InstructorCard key={`instructor-${index}`} index={index} {...instructor} />
        ))}

</div>
</>
  )
}

export default Instructors;
