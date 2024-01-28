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
import Image from "next/image";

const Preview = ({
  title,
  subTitle,
  color,
  Icon,
  progress,
  type,
  iconSize,
  titleFontSize,
  subTitleFontSize,
}) => {
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
      backgroundColor: theme.palette.mode === "light" ? `${color}` : "#308fe8",
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
        transitionDuration: 300,
      }}
    >
      <Container sx={{ padding: 6 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Icon === "success" && (
              // <ThumbUpOffAltIcon
              //   sx={{
              //     color: "white",
              //     fontSize: { xs: "15vh", sm: "25vh", md: "35vh" },
              //     marginBottom: 2,
              //   }}
              // />

              <Image
                src={"/Images/aomaru_30.png"}
                width={iconSize ?? 300}
                height={iconSize ?? 300}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {Icon === "warning" && (
              // <WarningAmberIcon
              //   sx={{
              //     color: "white",
              //     fontSize: { xs: "15vh", sm: "25vh", md: "35vh" },
              //     marginBottom: 2,
              //   }}
              // />

              <Image
                src={"/Images/aomaru_16.png"}
                width={iconSize ?? 300}
                height={iconSize ?? 300}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {Icon === "stop" && (
              // <PanToolIcon
              //   sx={{
              //     color: "white",
              //     fontSize: { xs: "15vh", sm: "25vh", md: "35vh" },
              //     marginBottom: 2,
              //   }}
              // />

              <Image
                src={"/Images/aomaru_59.png"}
                width={iconSize ?? 300}
                height={iconSize ?? 300}
                alt=""
                style={{ marginBottom: "20px" }}
              />
            )}
            {type === "utilization" && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "5vh", sm: "10vh", md: "15vh" },
                }}
              >
                {progress} %
              </Typography>
            )}
            {type === "occupancy" && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "5vh", sm: "10vh", md: "15vh" },
                }}
              >
                {progress}
              </Typography>
            )}
          </Grid>
          <GlassmorphicGrid item xs={12}>
            <Grid border={"solid white 2px"} borderRadius="8px">
              <BorderLinearProgress variant="determinate" value={progress} />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "4vh", sm: "7vh", md: "10vh" },
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 600,
                color: "white",
                padding: 2,
                fontSize: `${titleFontSize}px`
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2vh", sm: "4vh", md: "5vh" },
                textTransform: "none",
                textAlign: "center",
                color: "white",
                padding: 2,
                fontSize: `${subTitleFontSize}px`
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
