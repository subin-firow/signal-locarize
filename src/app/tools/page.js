/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PanToolIcon from "@mui/icons-material/PanTool";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Demo from "./demo";
import { Save } from "@/services/index.service";

const Tools = () => {
  const generateId = () => {
    return Math.random().toString(36).substring(2);
  };

  let formData = {
    threshold: 10,
    color: "#68d391",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Enter",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "",
  };

  const [enter, setEnter] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Enter",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "",
  });
  const [warning, setWarning] = useState({
    threshold: 10,
    color: "#f6e05e",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Warning",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "",
  });
  const [stop, setStop] = useState({
    threshold: 10,
    color: "#fc8181",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Stop",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "",
  });

  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [activeItem, setActiveItem] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: null,
    company_id: "example_company_id",
    uid: "example_uid",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "",
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
    if (isExpanded) {
      switch (panel) {
        case "enter":
          setExpandedAccordion("enter");
          setActiveItem(enter);
          break;
        case "warning":
          setExpandedAccordion("warning");
          setActiveItem(warning);
          break;
        case "stop":
          setExpandedAccordion("stop");
          setActiveItem(stop);
          break;
        default:
          setExpandedAccordion(null);
      }
    }
  };

  const handleEnterChange = (event) => {
    const { name, value } = event.target;
    setEnter((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWarningChange = (event) => {
    const { name, value } = event.target;
    setWarning((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStopChange = (event) => {
    const { name, value } = event.target;
    setStop((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSave = () => {
    Save(enter)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    Save(warning)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    Save(stop)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        paddingTop={1}
        display={"flex"}
        justifyContent={"end"}
        sx={{ backgroundColor: "#68d391" }}
      >
        <Button
          variant="outlined"
          sx={{
            margin: 2,
            borderColor: "lightgray",
            color: "white",
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"start"}
        padding={2}
        paddingX={4}
      >
        <TextField
          id="outlined-basic"
          label="Enter API key"
          variant="outlined"
          name="iframe"
          // value={enter.title}
          // onChange={handleEnterChange}
          sx={{ marginLeft: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Maximum Number of people"
          variant="outlined"
          name="apiKey"
          // value={enter.title}
          // onChange={handleEnterChange}
          sx={{ marginLeft: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Domain"
          variant="outlined"
          name="domain"
          // value={enter.title}
          // onChange={handleEnterChange}
          sx={{ marginLeft: 2 }}
        />
      </Grid>
      <Grid xs={12} md={4} paddingX={4}>
        <Accordion
          expanded={expandedAccordion === "enter"}
          onChange={handleAccordionChange("enter")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#68d391" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Enter
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #68d391` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={enter.title}
                  onChange={handleEnterChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={enter.subTitle}
                  onChange={handleEnterChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={enter.color}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={enter.icon}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={enter.type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={enter.threshold_type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={enter.threshold}
                  onChange={handleEnterChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "warning"}
          onChange={handleAccordionChange("warning")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#f6e05e" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Warning
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #f6e05e` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={warning.title}
                  onChange={handleWarningChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={warning.subTitle}
                  onChange={handleWarningChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={warning.color}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={warning.icon}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={warning.type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization %</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={warning.threshold_type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={warning.threshold}
                  onChange={handleWarningChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "stop"}
          onChange={handleAccordionChange("stop")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#fc8181" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Stop
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #fc8181` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={stop.title}
                  onChange={handleStopChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={stop.subTitle}
                  onChange={handleStopChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={stop.color}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={stop.icon}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={stop.type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization %</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={stop.threshold_type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={stop.threshold}
                  onChange={handleStopChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid xs={12} md={8} padding={2} height={"80vh"}>
        <Demo
          title={activeItem?.title}
          subTitle={activeItem?.subTitle}
          icon={activeItem.icon}
          threshold={activeItem?.threshold}
          color={activeItem?.color}
          type={activeItem?.type}
        />
      </Grid>
    </Grid>
  );
};

export default Tools;
