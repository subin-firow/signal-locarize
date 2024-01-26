"use client";
import Alert from "@mui/material/Alert";

export const CustomToast = ({ type, message }) => (
  <Alert severity={type}>{message}</Alert>
);
