import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/landingPage/Hero";
import { Courselist } from "../components/landingPage/Courselist";

import { Footer, Instructors, Newsletter, Testimonials } from "../components";
import { getCourses } from "../services/api";

export const Index = () => {

  const [courseData, setCoursedata] = useState([])

  const getAllCourses = async()=>{
    const res = await getCourses();
    console.log(res)
    setCoursedata(res.data)
  }

  useEffect(()=>{
    getAllCourses()
  },[])

  return (
    <>
      <section className=" flex flex-col bg-gray-200/90">
        <div className="bg-[#fff8eb] h-[90vh] flex flex-col">
          <Hero />
        </div>
        <Courselist data={courseData}/>
      </section>
    <div className="bg-cover bg-testimonialsBG">
      <Testimonials />
      <Instructors />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
