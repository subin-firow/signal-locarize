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
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PanToolIcon from "@mui/icons-material/PanTool";
import { styled } from "@mui/system";

const Preview = ({title , subTitle, color, Icon, progress, type}) => {

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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ padding: 6 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{
              display: { md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Icon === "success" && (
              <ThumbUpOffAltIcon
                sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }}
              />
            )}
            {Icon === "warning" && (
              <WarningAmberIcon
                sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }}
              />
            )}
            {type === "utilization" && (
              <Typography sx={{ color: "white", fontSize: "15vh" }}>
                {threshold} %
              </Typography>
            )}
            {type === "occupancy" && (
              <Typography sx={{ color: "white", fontSize: "15vh" }}>
                {threshold}
              </Typography>
            )}
          </Grid>
          <GlassmorphicGrid item xs={12}>
            <BorderLinearProgress variant="determinate" value={progress} />
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
              {subTitle}
            </Typography>
          </GlassmorphicGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Preview;
