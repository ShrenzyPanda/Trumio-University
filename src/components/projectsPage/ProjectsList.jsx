import React from "react";
import { useNavigate } from "react-router";

import { projectData } from "../../data/projectData";

const ProjectCard = ({ index, project_name, client, date, id }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate('/tickets', {state:{id}})
  };
  return (
    <>
      <div className=" mb-8 rounded-lg flex flex-row px-12 col-span-1 max-h-32 bg-white shadow-lg">
        <div className="w-[100%] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h2 className="text-black font-bold text-xl mb-2">
              {project_name}
            </h2>
            <p className="text-gray-700 text-base">Client : {client}</p>
            <p className="text-gray-400 text-base">Date : {date}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="bg-[#5f3673] font-medium  rounded-2xl p-4 text-white hover:bg-[#4f2b61]"
            onClick={() => handleClick(id)}
          >
            Show Tickets
          </button>
        </div>
      </div>
    </>
  );
};

const ProjectsList = ({ data }) => {
  return (
    <>
      <div className="pt-32 px-14 bg-gray-100 h-screen">
        <div className="col-span-2 uppercase text-2xl font-bold text-gray-700 px-5 py-3 rounded-xl bg-white shadow-lg">
          Project Dashboard
        </div>
        <div className=" grid grid-cols-2 gap-x-10 mt-10">
          {Object.keys(data).map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...data[project]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
