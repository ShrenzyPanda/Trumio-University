import React from 'react';
import { projectData } from '../../data/projectData';
import clientPic from '../../assets/bidderPage/sampleProject.svg'


export const ProjectCard = ({data}) => {
  return (
    <>
    
<div className="ml-28 mt-12 mb-8 shadow-lg rounded-lg w-[80%] flex flex-row bg-white ">
  <div className="w-[15%] flex align-middle  rounded-t lg:rounded-t-none lg:rounded-l text-center ">
  <img src={clientPic} alt="ProjectImage" className="w-[80%] px-5"></img>
  </div>
  <div className="w-[70%] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <h2 className="text-black font-bold text-xl mb-2">{data.title}
        </h2>
      <p className="text-gray-700 text-base"><span>{data.name}</span><span className='px-2'> | </span><span>{data.place}</span></p>
      <p className="text-sm text-gray-400 flex flex-row"><span>Posted On 15/12/2023</span> <span className='px-2'> | </span> <span><p>Currently Accepting Bids</p></span> <span className='px-2'> | </span> <span>100 impressions</span></p>
    </div>
    <div className="flex items-center">
      <div className="grid grid-cols-4">
      {data.domains.map((tech, index) => (
          <p><span className='px-2'>•</span>{tech}</p>
        ))}
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-center">
    <button className="border-[3px] border-[#0578FB] text-[#0578FB] font-medium hover:bg-[#0578FB] hover:text-gray-100 rounded-full p-4 bg-transparent">Manage Bid</button>
  </div>
</div>
    </>
  )
}

const Project = ({data}) => {
  return (
    <>
      <ProjectCard data={data} />
    </>
  )
}

export default Project;