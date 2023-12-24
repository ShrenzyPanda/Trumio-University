import React, { useEffect, useState } from "react";
// import { trendingNews } from "../../data/trendingNews";
import { NewsSection } from ".";
import { getNews } from "../../services/api";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Trending = () => {
  const [trendingNews, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const news = async () => {
    try {
      const res = await getNews();
      console.log(res.data[0]);
      setNews(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    news();
  }, []);
  return (
    <>
      <div className="ml-[20px] mt-10 ">
        {loading ? (
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        ) : (
          <NewsSection newsData={trendingNews} />
        )}
      </div>
    </>
  );
};

export default Trending;
