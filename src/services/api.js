import axios from "axios";
const url = "http://127.0.0.1:5000";

export const getCourses = () => {
  return axios.get(`${url}/course`);
};

export const login = (data) => {
  return axios.post(`${url}/login`, data);
};

export const register = (data) => {
  return axios.post(`${url}/signup`, data);
};

export const getPersonalizedCourses = (data) => {
  return axios.post(`${url}/courseRecomendation`, { domains: data });
};

export const getNews = () => {
  return axios.post(`${url}/newFlashTrending`, { NumFeed: 5 });
};

export const getPersonalizedNews = (data) => {
  return axios.post(`${url}/newsFlashBySkills`, { domains: data, NumFeed: 5 });
};

export const getBidder = (data) => {
  return axios.post(`${url}/bidderRecomendation`, { domains: data });
};

export const getProjects = () => {
  return axios.get(`${url}/getProjects`);
};

export const getTicket = (id) => {
  return axios.post(`${url}/getProjectInfo`, { project_id: id });
};
