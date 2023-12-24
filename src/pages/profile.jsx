import React, { useEffect, useState } from "react";
import { Navbar, Title, Sidebar } from "../components/profilePage";
import { useAuth } from "../contexts/authContext";
import { getPersonalizedCourses } from "../services/api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Profile = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const personalizedCourses = async () => {
    const res = await getPersonalizedCourses(user.student_data.domains);
    console.log(res.data);
    setCourses(res.data);
    setLoading(false);
  };

  useEffect(() => {
    personalizedCourses();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-row mt-20">
        <Sidebar />
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <Title data={user.student_data} courses={courses} />
        )}
      </div>
    </>
  );
};
