import React from "react";
// import { courseData } from "../../data/CourseDemo";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

export const Courselist = ({data}) => {
  return (
    <div className="flex flex-col items-center mt-40 text-gray-800 mx-10 mb-10">
      <h1 className="tracking-wide text-5xl font-bold">Our Courses</h1>
      <div className="mt-3 text-gray-400 text-lg">
        Welcome to the world of learning!
      </div>
      <section className="grid grid-cols-3 gap-20 mt-8">
        {data.map((item) => {
          return (
            <>
              <div className="bg-gray-100 rounded-lg p-3 col-span-1 w-[23vw] shadow-lg">
                <img
                  src={item.image_480x270}
                  alt=""
                  className="object-cover rounded border border-gray-200"
                />
                <div className="flex justify-between text-sm text-gray-500/90 font-medium mt-2">
                  <div>{item.category}</div>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={item.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                  </div>
                </div>
                <div className="text-lg font-medium mt-2">{item.title}</div>
                {item.is_paid ? <span className="text-[0.8rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">PAID</span> : <span className="text-[0.8rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">FREE</span>}
                <div className="flex gap-4 mt-3">
                  <div className="text-gray-500 text-sm flex items-center gap-1">
                    <AccessTimeIcon fontSize="small" />2 hrs
                  </div>
                  <div className="text-gray-500 text-sm flex items-center gap-1">
                    <VideocamRoundedIcon fontSize="small" /> {item.num_published_lectures}{" "}
                    lectures
                  </div>
                  <div className="text-gray-500 text-sm flex items-center gap-1">
                    <FileDownloadRoundedIcon fontSize="small" />{" "}
                    {item.num_subscribers}
                  </div>
                </div>
                <div className="w-full flex justify-center mb-1">
                <button className="text-gray-100 bg-[#ff7426] px-5 py-2 font-medium rounded-3xl w-1/2 mx-auto mt-5">
                <a href={`https://udemy.com${item.url}`} target="_blank">
                 Join Course
                </a>
                </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};
