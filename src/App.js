import { Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./pages/profile";
import Bidder from "./pages/Bidder";
import ProjectForm from "./pages/ProjectForm";
import ProjectDisplay from "./pages/ProjectDisplay";
import Tickets from "./pages/Tickets";
import { Navbar2 } from "./components/navbar/Navbar2";
import { Navbar3 } from "./components/navbar/Navbar3";

function App() {
  return (
    <>
      <ToastContainer />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<><Navbar/><Index /></>} />
        <Route path="/login" element={ <><Navbar/><Signin /></>} />
        <Route path="/register" element={<> <Navbar/><Register /></>} />
        <Route path="/profile" element={<><Navbar2/><Profile /></>} />
        <Route path="/form" element = {<><Navbar3/><ProjectForm /></>} />
        <Route path="/bid" element = {<><Navbar3/><Bidder /></>} />
        <Route path="/projects" element = {<><Navbar3/><ProjectDisplay /></>} />
        <Route path="/tickets" element = {<><Navbar3/><Tickets /></>} />
      </Routes>
    </>
  );
}

export default App;

