"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { styled } from "@mui/system";

const Demo = ({ title, subtitle, icon, threshold, color, type }) => {
  console.log("🚀 ~ file: demo.js:16 ~ Demo ~ icon:", icon)
  const Icon = icon ? icon : ThumbUpOffAltIcon;
  const GlassmorphicGrid = styled(Grid)({
    background: "rgba(0, 0, 0, 0.1)", // Black background with transparency
    backdropFilter: "blur(10px)", // Adjust the blur radius as neededa
    borderRadius: "8px", // Adjust the border radius as needed
    padding: "16px", // Add padding for a better visual effect
  });

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light" ? `${color}` : "#308fe8",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: color,
        minHeight: "100%",
        borderRadius: "8px",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: { md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }} />
            {type && (
              <Typography sx={{ color: "white", fontSize: "15vh" }}>
                {type}
              </Typography>
            )}
          </Grid>
          <GlassmorphicGrid item xs={12} marginX={5} marginBottom={4}>
            <BorderLinearProgress variant="determinate" value={threshold} />
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 600,
                color: "white",
                padding: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "none",
                textAlign: "center",
                color: "white",
                padding: 2,
              }}
            >
              {subtitle}
            </Typography>
          </GlassmorphicGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
