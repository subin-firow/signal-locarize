"use client";

import React, { useEffect, useState } from "react";
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
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PanToolIcon from "@mui/icons-material/PanTool";
import Image from "next/image";
import { m } from "framer-motion";

const Demo = ({
  title,
  subTitle,
  icon,
  threshold,
  color,
  type,
  iconSize,
  titleFontSize,
  subTitleFontSize,
  max_capacity,
  backgroundColor,
  displayType,
}) => {
  const GlassmorphicGrid = styled(Grid)({
    background: backgroundColor, // Black background with transparency
    backdropFilter: "blur(10px)", // Adjust the blur radius as neededa
    borderRadius: "8px", // Adjust the border radius as needed
    padding: "16px", // Add padding for a better visual effect
  });
  if (max_capacity != 0) {
    (max_capacity = (threshold * 100) / max_capacity),
      (max_capacity = max_capacity.toFixed(0));
  } else {
    max_capacity = threshold;
  }
  // calculate threshold percentage

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? `${color}` : "#308fe8",
    },
  }));
  //308fe8
  return (
    <Box
      sx={{
        backgroundColor: color,
        minHeight: "80vh",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon === "success" && (
              // <ThumbUpOffAltIcon
              //   sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }}
              // />

              <Image
                src={"/Images/aomaru_30.png"}
                width={iconSize}
                height={iconSize}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {icon === "warning" && (
              // <WarningAmberIcon
              //   sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }}
              // />

              <Image
                src={"/Images/aomaru_16.png"}
                width={iconSize}
                height={iconSize}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {icon === "stop" && (
              // <PanToolIcon
              //   sx={{ color: "white", fontSize: "35vh", marginBottom: 2 }}
              // />

              <Image
                src={"/Images/aomaru_59.png"}
                width={iconSize}
                height={iconSize}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {type === "utilization" && (
              <Typography sx={{ color: "white", fontSize: "15vh" }}>
                {max_capacity} %
              </Typography>
            )}
            {type === "occupancy" && (
              <Typography sx={{ color: "white", fontSize: "15vh" }}>
                {threshold}
              </Typography>
            )}
          </Grid>
          <GlassmorphicGrid item xs={12} marginBottom={4}>
            {displayType !== "Closed"  && displayType !== "Holiday" && (
            <Grid border={"solid white 6px"} borderRadius="12px">
              <BorderLinearProgress
                variant="determinate"
                value={max_capacity}
              />
            </Grid>
            )}
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 600,
                color: "white",
                padding: 2,
                fontSize: `${titleFontSize}px`,
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
                fontSize: `${subTitleFontSize}px`,
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

export default Demo;
