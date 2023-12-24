import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { login } from "../services/api";
import { useAuth } from "../contexts/authContext";


export default function Signin() {
  const navigate = useNavigate();
  const {setUser} = useAuth();
//   const {handleOptionSelect} = useOptions();
  const [data, setData] = useState({
    email: "",
    password: ""
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
      const res = await login(data);
      console.log(res);
      toast.success(res.data.message);
      setUser(res.data);
      setLoader(false);
      setTimeout(() => {
        navigate("/profile");
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
            paddingX:"30px",
            paddingY:"30px",
            bgcolor:"white",
            borderRadius:"5px",
            width:"500px",
            boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                label="Email"
                name="email"
                autoFocus
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
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
                  "Sign In"
                )}
              </Button>
            </Box>
          </form>
        </Box>
    </div>
  );
}
