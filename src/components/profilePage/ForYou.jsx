import React, { useEffect, useState } from "react";
// import { recommendedNews } from "../../data/recommendedNews";
import { NewsSection } from ".";
import { getPersonalizedNews } from "../../services/api";
import { useAuth } from "../../contexts/authContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ForYou = ({ domain }) => {
  const { user } = useAuth();
  const [recommendedNews, setRecommendedNews] = useState({});
  const [loader, setLoader] = useState(true);
  const [filteredNews, setFilteredNews] = useState({});

  const newsBySkills = async () => {
    let domain = user.student_data.domains;
    const res = await getPersonalizedNews(domain);
    // console.log(res);
    setRecommendedNews(res.data);
    console.log(res.data[domain[0]][0])
    setFilteredNews(res.data[domain[0]]);
    setLoader(false);
  };

  useEffect(() => {
    newsBySkills();
  }, []);

  const clickHandler = (data) => {
    console.log("Now showing: ", data);
    setFilteredNews(recommendedNews[data]);
  };

  return (
    <>
      <div className="flex flex-row justify-between mt-10">
        <div className="ml-[26px] inline-flex  rounded-md " role="group">
          {user.student_data.domains.map((tech, idx) => (
            <button
              onClick={() => clickHandler(tech)}
              type="button"
              className="inline-block rounded-l bg-[#FFEDBD] px-4 pb-2 pt-2.5 text-xs border-2 border-gray-300 font-medium uppercase leading-normal text-gray-500 active:bg-[#FBEFCE] hover:bg-[#FBEFCE]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="flex w-[20%] align-bottom h-7">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-full text-sm bg-[#FBEFCE]
      border-2 border-gray-300  bg-clip-padding px-3 py-[0.25rem] 
       font-normal leading-[1.6] text-neutral-700 outline-none "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 "
            id="basic-addon2"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <div className="ml-[20px] mt-10 ">
        {loader ? (
          <div>l
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
          </div>
        ) : (
          <NewsSection newsData={filteredNews} />
        )}
      </div>
    </>
  );
};

export default ForYou;
