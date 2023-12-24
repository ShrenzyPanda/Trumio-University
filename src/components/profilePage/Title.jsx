import React from 'react';
import { user } from '../../data/currentUser';
import {Course , Trending, ForYou} from './';
import { useState } from 'react';



const Title = ({data, courses}) => {
  console.log(courses)

  const [option,setOption] = useState({
    "courses" : true,
  "trending" : false,
  "forYou" : false
  });

  const clickHandler = (data) => {
    console.log(data);
    if (data==="courses")
    {
      setOption({...option,
        courses:true,
        trending:false,
        forYou:false
      } );
    }
    else if (data==="trending")
    {
      setOption({...option,
        courses:false,
        trending:true,
        forYou:false
      } );
    }
    else if (data==="forYou")
    {
      setOption({...option,
        courses:false,
        trending:false,
        forYou:true
      } );
    }
};

  return (
    <>
    <div className="z-0 rounded-lg mx-auto w-[80%] max-w-screen-xl my-8">
  <div className="mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative">
      <div className="w-full bg-[#f8e3ac] h-[16vh]"><img className="object-fill object-center" src={user.cover} alt="cover" /></div>
      <div className="w-full absolute bottom-0 left-0 z-10 transform translate-y-3/4 lg:w-auto lg:translate-x-1/2 flex justify-center">
        <div className="bg-gray-400 w-[20vh] h-[20vh] rounded-full" ><img className="object-fill object-center" src={user.dp} alt="dp" /></div>
      </div>
    </div>
    
    <div className="bg-[#fcf3e2] pt-[120px] lg:pt-0 lg:pl-[240px] min-h-[120px]">
      <div className="p-4 text-center lg:text-left">
        <h1 className="font-mock text-2xl text-gray-700 mb-4">
          {data.name}
        </h1>
        
        <h2 className="font-mock text-gray-500">
          {user.designation}
        </h2>
      </div>
    </div>

    <div className="bg-[#fef7ea] pl-16 mt-[6vh]  min-h-[120px]">
      <div className="flex flex-row pt-[3%] rounded-md" >
        <button onClick={() => clickHandler("courses")} type="button" className="flex px-8 mx-4 py-2 text-sm font-medium shadow-md text-gray-500 bg-[#FBEFCE]  rounded-lg hover:bg-[#499BFC] hover:text-white focus:z-10 focus:ring-2  focus:bg-[#499BFC] focus:text-white ">
          Courses
        </button>
        <button onClick={() => clickHandler("trending")} type="button" className="flex px-8 py-2 mx-2 text-sm font-medium shadow-md text-gray-500 bg-[#FBEFCE] rounded-lg  hover:bg-[#499BFC] hover:text-white focus:z-10 focus:ring-2  focus:bg-[#499BFC] focus:text-white ">
          Trending 
        </button>
        <button onClick={() => clickHandler("forYou")} type="button" className="flex px-8 py-2 mx-4 text-sm font-medium shadow-md text-gray-500 bg-[#FBEFCE]  rounded-lg hover:bg-[#499BFC] hover:text-white focus:z-10 focus:ring-2  focus:bg-[#499BFC] focus:text-white ">
          For You
        </button>
      </div>
      <div className='pb-2'>
      {option.courses?<Course domain={data.domains} courses={courses} /> : null}
      {option.trending?<Trending /> : null }
      {option.forYou?<ForYou domain={user.domain} /> : null}

      </div>

    </div>
    
    
  </div>
</div>
    </>
  )
}

export default Title;