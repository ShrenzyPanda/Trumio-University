import React from "react";
import { bidderData } from "../../data/bidderData";
import { sampleBidder } from "../../assets/bidderPage";
import Rating from "@mui/material/Rating";
import RecommendIcon from "@mui/icons-material/Recommend";
import gold from '../../assets/badges/gold.svg'
import silver from '../../assets/badges/silver.svg'
import bronze from '../../assets/badges/bronze.svg'

const BidderCard = ({ index, image, name, designation, rating, domains, number_of_projects_completed }) => {
  return (
    <>
      <div className="flex flex-row bg-white shadow-md  rounded-md gap-3">
        <div className="w-[12%] flex align-middle  rounded-t lg:rounded-t-none lg:rounded-l text-center ">
          <img src={sampleBidder} alt="ProjectImage" className="w-[80%] pl-6"></img>
        </div>

        <div className="w-[50%] bg-white rounded-b lg:rounded-b-none lg:rounded-r py-4 flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <h2 className="text-gray-700 font-bold text-xl mb-2 flex gap-2">
              {
                number_of_projects_completed >=7 && (<img src={gold} className="w-6" alt="" />)
              }
              {
                number_of_projects_completed > 4 && number_of_projects_completed <7 && (<img src={silver} className="w-6" alt="" />)
              }
              {
                number_of_projects_completed >=2 && number_of_projects_completed <=4  && (<img src={bronze} className="w-6" alt="" />)
              }
              {name}</h2>
            <p className="text-gray-600 break-normal">
              Number of completed projects - {number_of_projects_completed}
            </p>
            <div className="flex items-center mt-6">
              <div className="flex flax-wrap gap-5">
                {domains.map((tech, index) => (
                  <p className="text-sm px-4 py-1 bg-gray-200 rounded-xl">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  items-center">
          <p className="flex flex-row items-center">
            <span className="">
              <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
              />
            </span>
            <span className="px-2 text-gray-500">{rating}</span>
          </p>
          {index == 0 && (
            <button className=" font-medium rounded-full py-2 px-4 mx-1 bg-green-800 text-gray-100">
              <RecommendIcon /> Recommended
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const BidderList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mt-10 pb-16 ml-28 flex flex-col w-[80%] gap-5">
        <div className="text-xl font-medium tracking-wide">
          Recommended Bidders
        </div>
        {data.map((bidder, index) => (
          <BidderCard key={`bidder-${index}`} index={index} {...bidder} />
        ))}
      </div>
    </>
  );
};

export default BidderList;
