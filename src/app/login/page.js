"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { CustomToast } from "../create/toast";
import { useRouter } from "next/navigation";

const initalValues = { email: "", password: "" };
const Login = () => {
  const [details, setDetails] = useState(initalValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    toast.loading("Loggin in");
    axios
      .post(`http://localhost:5008/v1/login`, details)
      .then((res) => {
        console.log(res.data.data);
        setLoading(false);
        toast.dismiss();
        toast((t) => <CustomToast type="success" message="Login successful" />);
        // setDetails(null);

        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("companyId", res.data.data.company_id);
        localStorage.setItem("locationId", res.data.data.location_id);
        router.push("/tools");
      })
      .catch((e) => {
        console.log(e);
        toast.dismiss();
        setLoading(false);
        toast.error(e?.response.data.message);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transitionDuration: 300,
      }}
    >
      <Box sx={{ padding: 9 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "gray" }}
        >
          Login
        </Typography>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="success"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
