import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import Domain from "../../components/DomainSelect";
import { getBidder } from "../../services/api";
import { toast } from "react-toastify";


export default function FormComponent() {
    const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    title: "",
    name: "",
    description: "",
    place:"",
    domains: [],
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoader(true);
      const res = await getBidder(data.domains);
      console.log(res);
      toast.success(res.data.message);
      setLoader(false);
      setTimeout(() => {
        navigate("/bid", {state:{project:data, bidder:res.data}});
      }, 500);
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "30px",
          paddingY: "20px",
          bgcolor: "white",
          borderRadius: "5px",
          width: "500px",
          mt:10,
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      >
        <Typography component="h1" variant="h5">
          Client Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              size="small"
              label="Name"
              name="name"
              autoFocus
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              size="small"
              label="Email"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              size="small"
              label="Place"
              name="place"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              size="small"
              label="Project Title"
              name="title"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Domain data={data} setData={setData} />
            <TextField
              margin="normal"
              required
              multiline
              rows={3}
              fullWidth
              type="text"
              size="small"
              label="Project Description"
              name="description"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loader}
              sx={{ mt: 3, mb: 2 }}
            >
              {loader ? (
                <CircularProgress color="secondary" sx={{ width: "80%" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}
