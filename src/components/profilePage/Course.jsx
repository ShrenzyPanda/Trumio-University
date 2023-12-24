import React from "react";
import { userCourses } from "../../data/userCourses";
// import {settings} from '../../data/sliderSettings';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

const CourseCard = ({
  index,
  image_480x270,
  category,
  rating,
  title,
  is_paid,
  duration,
  num_published_lectures,
  num_subscribers,
  url
}) => {
  return (
    <>
      <div className="bg-gray-100 rounded-md p-4 col-span-1 w-[20vw] shadow-lg">
        <img src={image_480x270} alt="" className="object-cover rounded" />
        <div className="flex justify-between text-sm text-gray-500/90 font-medium mt-2">
          <div>{category}</div>
          <div>
            <Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              size="small"
            />
          </div>
        </div>
        <div className="font-medium mt-2">{title}</div>
        {is_paid ? (
          <span className="text-[0.7rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">
            PAID
          </span>
        ) : (
          <span className="text-[0.7rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">
            FREE
          </span>
        )}
        <div className="flex gap-4 mt-3">
          <div className="text-gray-500 text-sm flex items-center gap-1">
            <AccessTimeIcon fontSize="small" /> 2 hrs
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-1">
            <VideocamRoundedIcon fontSize="small" /> {num_published_lectures} lectures
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-1">
            <FileDownloadRoundedIcon fontSize="small" /> {num_subscribers}
          </div>
        </div>
        <div className="w-full flex justify-center mb-1">
          <button className="text-gray-100 bg-[#ff7426] px-5 py-2 font-medium rounded-3xl w-1/2 mx-auto mt-5">
          <a href={`https://udemy.com${url}`} target="_blank">
            Join Course
          </a>
          </button>
        </div>
      </div>
    </>
  );
};

const Course = ({ domain, courses }) => {
  console.log(courses)
  return (
    <>
      <div className="flex flex-col items-start mt-8 text-gray-800 mx-10 mb-5">
        {domain.map((tech, idx) => {
          console.log(courses[idx])
          return (
            <div>
            <h3 className="tracking-wide text-3xl font-bold mt-5">{tech}</h3>
            <section className="grid grid-cols-3 gap-14 mt-3 mb-5">
              {courses[idx].map((course, index) => {
                return (
                  <>
                    <CourseCard
                      key={`course-${index}`}
                      index={index}
                      {...course}
                    />
                </>
                )
                  })}
            </section>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Course;
