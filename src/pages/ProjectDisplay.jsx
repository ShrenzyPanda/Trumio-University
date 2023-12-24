import React, { useEffect, useState } from "react";
import { BidNavbar } from "../components/bidderPage";
import ProjectsList from "../components/projectsPage/ProjectsList";
import { getProjects } from "../services/api";

const ProjectDisplay = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const getAllProjects = async () => {
    const res = await getProjects();
    console.log(res.data);
    setData(res.data);
    setLoader(false);
  };
  useEffect(() => {
    getAllProjects();
  }, []);
  return <>{loader ? <div>loading....</div> : <ProjectsList data={data} />}</>;
};

export default ProjectDisplay;
