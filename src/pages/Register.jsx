import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import Domain from "../components/DomainSelect";
import { register } from "../services/api";
import { toast } from "react-toastify";


export default function Register() {
    const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
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
      const res = await register(data);
      console.log(res);
      toast.success(res.data.message);
      setLoader(false);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error("error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fff8eb]">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "30px",
          paddingY: "30px",
          bgcolor: "white",
          borderRadius: "5px",
          width: "500px",
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              size="small"
              label="Username"
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
              size="small"
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Domain data={data} setData={setData} />
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
                "Register"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}
