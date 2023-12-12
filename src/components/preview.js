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

const Preview = () => {
  const data = {
    // success

    title: "Welcome",
    subTitle: "Please do not enter the store at the moment",
    color: "#5fd461",
    Icon: ThumbUpOffAltIcon,
    progress: 50,
    utilization: "2.5%",

    //warning

    // title: "Attention",
    // subTitle: "One person per minute",
    // color: "#d6cf49",
    // Icon: WarningAmberIcon,
    // progress: 50,

    //stop

    // title: "Stop",
    // subTitle: "Please do not enter the store at the moment",
    // color: "#b95858",
    // Icon: PanToolIcon,
    // progress: 50,
  };

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
        theme.palette.mode === "light" ? `${data.color}` : "#308fe8",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: data.color,
        minHeight: "100%",
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
            <data.Icon
              sx={{ color: "white", fontSize: "55vh", marginBottom: 2 }}
            />
            {data?.utilization && (
              <Typography sx={{ color: "white", fontSize: "35vh" }}>
                {data?.utilization}
              </Typography>
            )}
          </Grid>
          <GlassmorphicGrid item xs={12}>
            <BorderLinearProgress variant="determinate" value={data.progress} />
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
              {data.title}
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
              {data.subTitle}
            </Typography>
          </GlassmorphicGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Preview;
