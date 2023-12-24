import React from "react";
import Heropic from "../../assets/landingPage/OBJECTS.svg";
import BackgroundTexture from "../../assets/landingPage/Group 327.png";
import Icon1 from '../../assets/landingPage/online-test 1.svg'
import Icon2 from '../../assets/landingPage/exam 1.svg'
import Icon3 from '../../assets/landingPage/certification 1.svg'

const cardContent = [
    {
        image:Icon1,
        heading:"Learn The Latest Skills",
        content:"Learn various skills from top rated courses from various institutions and platforms."
    },
    {
        image:Icon2,
        heading:"Get Ready For a Career",
        content:"Get projects from various clients on different domains."
    },
    {
        image:Icon3,
        heading:"Earn a Certificate",
        content:"Earn badges and certificates from trumio after completing courses and projects from clients"
    },
]

export const Hero = () => {
  return (
    <div className="flex gap-5 justify-between items-center flex-grow mx-24 relative">
      <img
        src={BackgroundTexture}
        alt=""
        className="absolute top-20 object-cover overflow-y-hidden"
      />
      <section className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight">
          The <span className="text-[#FF7426]">Smart</span> <br /> Choice For{" "}
          <span className="text-[#FF7426]">Future</span>
        </h1>
        <div className="text-lg text-[#807f7f]">
          Watch courses, learn new skills, explore your passion, we <br />{" "}
          succeed in developing an industry ready mindset helping to <br /> contribute in the fast pace developing times.
        </div>
      </section>
      <section className="w-[650px]">
        <img src={Heropic} alt="hi" className="w-[90%]" />
      </section>
      <div className="absolute -bottom-36 bg-[#4D2C5E] p-8 rounded-xl text-gray-200 flex justify-evenly gap-7 w-[80vw] left-[50%] right-[50%] -translate-x-1/2 -translate-y-1/2">
        {cardContent.map((item)=>{
            return (
                <>
                <div className="flex gap-5">
                    <div>
                        <img src={item.image} alt=""  className="p-3 rounded-md bg-[#8e4eae] w-[120px]"/>
                    </div>
                    <div>
                        <div className="font-medium text-lg">{item.heading}</div>
                        <div className="text-sm mt-1 text-gray-300">{item.content}</div>
                    </div>
                </div>
                </>
            )
        })}
      </div>
    </div>
  );
};
